'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import persistPlugin from './utils/persistPlugin';
import timeStampPlugin from './utils/timeStampPlugin';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import merge from 'deepmerge';

Vue.use(Vuex);

const randomId = () => parseInt(Math.random() * 1e10);

let config = {
    authDomain: 'habitology-ffa70.firebaseapp.com',
    databaseURL: 'https://habitology-ffa70.firebaseio.com',
    projectId: 'habitology-ffa70',
    storageBucket: 'habitology-ffa70.appspot.com',
    messagingSenderId: '127457719546'
};

const basicState = {
    syncingState: 'cloud_off',
    habits: {},
    log: [],
    user: {},
    locale: 'ru',
    apiKey: '',
    timeStamp: 0
};

const mutations = {
    incrementLog(state, payload) {
        state.log = state.log.concat(payload);
    },
    updateHabit(state, payload) {
        if (!state.habits) {
            state.habits = {};
        }
        state.habits[payload.id] = payload;
    },
    removeHabit(state, habitId) {
        const newHabits = Object.keys(
            state.habits
        ).reduce((newHabits, singleHabitKey) => {
            const habit = state.habits[singleHabitKey];
            if (habit.id === parseInt(habitId)) {
                newHabits[habit.id] = habit;
                newHabits[habit.id].destroy = true;
            }
            newHabits[habit.id] = habit;
            return newHabits;
        }, {});
        state.log = state.log.filter(singleLogItem => {
            return singleLogItem.habitId !== habitId;
        });
        state.habits = newHabits;
    },
    updateLogItem(state, payload) {
        state.log = state.log.map(singleLogItem => {
            if (singleLogItem.id === payload.id) {
                return payload;
            }
            return singleLogItem;
        });
    },
    removeLogItem(state, logItemId) {
        state.log = state.log.filter(singleLogItem => {
            return singleLogItem.id !== logItemId;
        });
    },
    restoreState(state, payload) {
        state.habits = payload.habits;
        state.log = payload.log;
        state.user = payload.user;
        state.locale = payload.locale;

        state.timeStamp = payload.timeStamp;
        state.apiKey = payload.apiKey;
        config.apiKey = payload.apiKey;
        firebase.initializeApp(config);
        window.firebase = firebase;
        setTimeout(() => {
            window.i18n.locale = payload.locale || 'ru';
        }, 200);
    },
    localeSet(state, newLocale) {
        state.locale = newLocale;
        window.i18n.locale = newLocale;
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
    saveSettings(state, newSettings) {
        state.apiKey = newSettings.apiKey;
        state.locale = newSettings.locale;
    },
    timeStamp(state, newTimeStamp) {
        state.timeStamp = newTimeStamp;
    },
    syncWithCloud(state) {
        if (!firebase || !state.user || !state.user.uid) {
            return;
        }
        state.syncingState = 'cloud_download';
        const ref = 'users/' + state.user.uid;
        firebase.database().ref(ref).once('value').then(function(snapshot) {
            const { habits, locale, log, timeStamp } = state;
            const localState = {
                habits,
                locale,
                log,
                timeStamp: timeStamp || 0
            };
            const serverState = snapshot.val();
            let mergedState = {};
            mergedState.habits = merge(localState.habits, serverState.habits || {});

            const cleanedHabits = Object.keys(mergedState.habits).reduce((newState, singleHabit) => {
                if (mergedState.habits[singleHabit].destroy) {
                    return newState;
                }
                newState[singleHabit] = mergedState.habits[singleHabit];
                return newState;
            }, {});
            firebase.database().ref('users/' + state.user.uid).update({ habits: cleanedHabits });

            state.habits = mergedState.habits;
            // state.log = mergedState.log;
            // state.user = mergedState.user;
            // state.locale = mergedState.locale;
            state.syncingState = 'cloud_done';
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
    localeSet({ commit }, newLocale) {
        commit('localeSet', newLocale);
    },
    getUser({ commit }, user) {
        commit('getUser', user);
    },
    logOut({ commit }) {
        commit('setUser', {});
    },
    logIn({ commit }, newUser) {
        commit('getUser', newUser);
    },
    saveSettings({ commit }, newSettings) {
        commit('saveSettings', newSettings);
    },
    syncWithCloud({ commit }) {
        commit('syncWithCloud');
    }
};
const store = new Vuex.Store({
    state: basicState,
    actions,
    mutations,
    plugins: [persistPlugin, timeStampPlugin]
});

export default store;
