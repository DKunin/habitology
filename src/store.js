import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 2,
    habits: [
        {
            id: 0,
            name: 'Drink clean water daily',
            type: 'count'
        }
    ],
    types: [
        { id: 'count', manipulation: 'addition' },
        { id: 'boolean', manipulation: 'check' }
    ],
    log: [
        {
            id: 0,
            date: '14-01-2017',
            habitId: 0,
            score: 10
        }
    ]
};

const mutations = {
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    }
};

const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
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
