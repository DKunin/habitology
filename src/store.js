'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import persistPlugin from './utils/persistPlugin';

Vue.use(Vuex);

const randomId = () => parseInt(Math.random() * 1e10);

const state = {
    habits: {},
    log: [],
    locale: 'ru'
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
        state.locale = payload.locale;

        setTimeout(() => {
            window.i18n.locale = payload.locale;
        }, 200);
    },
    localeSet(state, newLocale) {
        state.locale = newLocale;
        window.i18n.locale = newLocale;
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

// const getters = {
//     evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd')
// };

export default new Vuex.Store({
    state,
    actions,
    mutations,
    plugins: [persistPlugin]
});
