import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 2,
    habits: [
        {
            id: 0,
            name: 'Drink clean water daily',
            count: 15
        }
    ],
    types: [],
    log: [
        {
            id: 0,
            date: '14-01-2017',
            habitId: 0,
            amount: 10
        }
    ]
};

const mutations = {
    incrementLog(state, payload) {
        state.log = state.log.concat(payload);
    }
};

const actions = {
    incrementLog({ commit, state }, payload) {
        commit('incrementLog', Object.assign({ id: parseInt(Math.random() * 1e10) }, payload));
    },
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment');
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit('increment');
                resolve();
            }, 1000);
        });
    }
};

const getters = {
    evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd')
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
