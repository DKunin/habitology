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

Vue.material.registerTheme('default', {
    primary: {
        color: 'grey',
        hue: 900
    },
    accent: {
        color: 'blue-grey',
        hue: 300
    },
    warn: {
        color: 'red',
        hue: 600
    },
    background: {
        color: 'grey',
        hue: 200
    }
});

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
