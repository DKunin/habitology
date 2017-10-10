'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import persistPlugin from './utils/persistPlugin';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
import merge from 'deepmerge';
import compare from 'compare-semver';
import packageJson from '../package.json';
import {
    SYNC_PROGRESS,
    SYNC_DONE,
    SYNC_OFF,
    SYNC_DISCONNECTED
} from './config/syncStates';
Vue.use(Vuex);

function randomId() {
    return parseInt(Math.random() * 10000000000);
}

const config = {
    apiKey: 'AIzaSyD8-mtgEl3_PrD9mZe2iwPARtRDLen7nu4',
    authDomain: 'habitology-ffa70.firebaseapp.com',
    databaseURL: 'https://habitology-ffa70.firebaseio.com',
    projectId: 'habitology-ffa70',
    storageBucket: 'habitology-ffa70.appspot.com',
    messagingSenderId: '127457719546'
};

const basicState = {
    syncingState: SYNC_DONE,
    habits: {},
    log: [],
    user: {},
    locale: 'ru',
    sorting: [],
    dragging: false,
    newVersion: false
};

const mutations = {
    incrementLog(state, payload) {
        state.log = state.log.concat(payload);
        state.syncingState = SYNC_OFF;
    },
    updateHabit(state, payload) {
        if (!state.habits) {
            state.habits = {};
        }
        state.habits[payload.id] = payload;
        state.syncingState = SYNC_OFF;
    },
    removeHabit(state, habitId) {
        state.habits = Object.keys(
            state.habits
        ).reduce((newHabitsArray, singleHabitKey) => {
            const habit = state.habits[singleHabitKey];
            if (habit.id === parseInt(habitId)) {
                newHabitsArray[habit.id] = habit;
                newHabitsArray[habit.id].destroy = true;
            }
            newHabitsArray[habit.id] = habit;
            return newHabitsArray;
        }, {});

        state.log = state.log.reduce((newLog, singleLogItem) => {
            if (parseInt(singleLogItem.habitId) === parseInt(habitId)) {
                singleLogItem.destroy = true;
            }
            return newLog.concat(singleLogItem);
        }, []);

        state.syncingState = SYNC_OFF;
    },
    updateLogItem(state, payload) {
        state.log = state.log.map(singleLogItem => {
            if (singleLogItem.id === payload.id) {
                return payload;
            }
            return singleLogItem;
        });
        state.syncingState = SYNC_OFF;
    },
    removeLogItem(state, logItemId) {
        state.log = state.log.reduce((newLog, singleLogItem) => {
            if (parseInt(singleLogItem.id) === parseInt(logItemId)) {
                singleLogItem.destroy = true;
            }
            return newLog.concat(singleLogItem);
        }, []);
    },
    restoreState(state, payload) {
        state.habits = payload.habits;
        state.log = payload.log;
        state.user = payload.user;
        state.locale = payload.locale;
        state.sorting = payload.sorting || [];
        moment.locale(payload.locale || 'ru');
        window.firebase.initializeApp(config);
        // window.firebase = firebase;
        setTimeout(() => {
            window.i18n.locale = payload.locale || 'ru';
        }, 200);
    },
    getUser(state, newUser) {
        state.user = {
            email: newUser.email,
            uid: newUser.uid
        };
    },
    setUser(state, newUser) {
        state.user = newUser;
    },
    logOut(state) {
        state.user = {};
        state.habits = {};
        state.log = [];
        state.syncingState = SYNC_OFF;
    },
    saveSettings(state, newSettings) {
        state.locale = newSettings.locale;
        window.i18n.locale = newSettings.locale;
        moment.locale(newSettings.locale || 'ru');
    },
    updateSorting(state, sortingOrder) {
        state.sorting = sortingOrder;
    },
    toggleDraging(state, newState) {
        state.dragging = newState;
    },
    checkForUpdate(state) {
        fetch(
            'https://raw.githubusercontent.com/DKunin/habitology/master/package.json'
        )
            .then(res => res.json())
            .then(result => {
                if (compare.lt(packageJson.version, [result.version])) {
                    state.newVersion = result.version;
                }
            });
    },
    syncWithCloud(state) {
        if (!window.firebase || !state.user || !state.user.uid) {
            return;
        }
        if (!window.navigator.onLine) {
            state.syncingState = SYNC_DISCONNECTED;
            return;
        }
        state.syncingState = SYNC_PROGRESS;
        const ref = 'users/' + state.user.uid;
        window.firebase
            .database()
            .ref(ref)
            .once('value')
            .then(function(snapshot) {
                const { habits, log } = state;
                const localState = {
                    habits,
                    log
                };
                const serverState = snapshot.val() || {};
                let mergedState = {};
                mergedState.habits = merge(
                    serverState.habits || {},
                    localState.habits
                );

                mergedState.log = merge(
                    serverState.log || [],
                    localState.log || []
                );

                const cleanedHabits = Object.keys(
                    mergedState.habits
                ).reduce((newState, singleHabit) => {
                    if (mergedState.habits[singleHabit].destroy) {
                        return newState;
                    }
                    newState[singleHabit] = mergedState.habits[singleHabit];
                    return newState;
                }, {});

                const cleanedLogs = mergedState.log.filter(singleLogItem => {
                    return !singleLogItem.destroy;
                }, {});
                window.firebase
                    .database()
                    .ref('users/' + state.user.uid)
                    .update({ habits: cleanedHabits, log: cleanedLogs });

                state.habits = mergedState.habits;
                state.log = cleanedLogs;
                state.syncingState = SYNC_DONE;
                localStorage.setItem(
                    'habitologyState',
                    JSON.stringify(
                        {
                            log: cleanedLogs,
                            habits: mergedState.habits,
                            user: state.user,
                            locale: state.locale,
                            sorting: state.sorting
                        },
                        null,
                        4
                    )
                );
            });
    }
};

const actions = {
    incrementLog({ commit, state }, payload) {
        commit('incrementLog', Object.assign({ id: randomId() }, payload));
    },
    updateHabit({ commit, state }, payload) {
        commit('updateHabit', Object.assign({ id: randomId() }, payload));
    },
    removeHabit({ commit, state }, habitId) {
        commit('removeHabit', habitId);
    },
    updateLogItem({ commit }, payload) {
        commit('updateLogItem', payload);
    },
    removeLogItem({ commit }, logItemId) {
        commit('removeLogItem', logItemId);
    },
    getUser({ commit }, user) {
        commit('getUser', user);
    },
    logOut({ commit }) {
        commit('logOut');
    },
    logIn({ commit }, newUser) {
        commit('getUser', newUser);
    },
    saveSettings({ commit }, newSettings) {
        commit('saveSettings', newSettings);
    },
    syncWithCloud({ commit }) {
        commit('syncWithCloud');
    },
    checkForUpdate({ commit }) {
        commit('checkForUpdate');
    },
    updateSorting({ commit }, newSort) {
        commit('updateSorting', newSort);
    },
    toggleDraging({ commit }, newState) {
        commit('toggleDraging', newState);
    }
};
const store = new Vuex.Store({
    state: basicState,
    actions,
    mutations,
    plugins: [persistPlugin]
});

export default store;
