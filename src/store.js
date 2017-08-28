import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 2,
    habits: [
        {
            id: 0,
            name: 'Drink clean water daily',
            goal: 100
        },
        {
            id: 1,
            name: 'Do sit ups daily',
            goal: 100
        }
    ],
    log: [
        {
            id: 0,
            date: 1503945432076,
            habitId: 0,
            amount: 10
        }, {
            id: 1,
            date: 1503945432076,
            habitId: 1,
            amount: 3
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
        commit(
            'incrementLog',
            Object.assign({ id: parseInt(Math.random() * 1e10) }, payload)
        );
    },
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment');
        }
    },
    incrementAsync({ commit }) {
        return new Promise(resolve => {
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
