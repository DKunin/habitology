'use strict';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';

import App from './App';
import router from './router';
import store from './store';
import messages from './config/locale';

Vue.use(Vuex);
Vue.use(VueMaterial);
Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'ru', // set locale
    messages // set locale messages
});

window.i18n = i18n;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: { App }
});
