'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import persistPlugin from './utils/persistPlugin';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.use(Vuex);

const randomId = () => parseInt(Math.random() * 1e10);

let config = {
    authDomain: 'habitology-ffa70.firebaseapp.com',
    databaseURL: 'https://habitology-ffa70.firebaseio.com',
    projectId: 'habitology-ffa70',
    storageBucket: 'habitology-ffa70.appspot.com',
    messagingSenderId: '127457719546'
};

const state = {
    habits: {},
    log: [],
    user: {},
    locale: 'ru',
    apiKey: ''
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
                return newHabits;
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
            email: newUser.email
        };
    },
    setUser(state, newUser) {
        state.user = newUser;
    },
    saveSettings(state, newSettings) {
        state.apiKey = newSettings.apiKey;
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
        console.log(commit, user);
    },
    logOut({ commit }) {
        commit('setUser', {});
    },
    logIn({ commit }, newUser) {
        commit('getUser', newUser);
    },
    saveSettings({ commit }, newSettings) {
        commit('saveSettings', newSettings);
    }
    // ,
    // incrementAsync({ commit }) {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             commit('increment');
    //             resolve();
    //         }, 1000);
    //     });
    // }
};
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    plugins: [persistPlugin]
});

export default store;

// setTimeout(function() {
//     store.commit('getUser', firebase.auth().currentUser || {});
// }, 500);
