'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';

import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuex);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
