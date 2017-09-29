'use strict';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import App from './pages/App';
import router from './router';
import store from './store';
import messages from './config/locale';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';
import * as AllIcons from '@/components/Icons';


Vue.use(Vuex);
Vue.use(VueMaterial);
Vue.use(VueI18n);
Vue.component('Icon', Icon);
Vue.component('Logo', Logo);

for (let el in AllIcons) {
    Vue.component(el, AllIcons[el]);
}

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

Vue.material.registerTheme('reddy', {
    primary: {
        color: 'red',
        hue: 200,
        textColor: 'white'
    },
    background: {
        color: 'red',
        hue: 600,
        textColor: 'white'
    },
    accent: {
        color: 'white',
        hue: 600,
        textColor: 'white'
    }
});

Vue.material.registerTheme('orangy', {
    primary: {
        color: 'red',
        hue: 900
    },
    background: {
        color: 'red',
        hue: 200
    },
    accent: {
        color: 'red',
        hue: 900
    }
});

Vue.material.registerTheme('bluey', {
    primary: {
        color: 'blue',
        hue: 200,
        textColor: 'white'
    },
    background: {
        color: 'blue',
        hue: 700,
        textColor: 'white'
    },
    accent: {
        color: 'white',
        hue: 900,
        textColor: 'white'
    }
});

Vue.material.registerTheme('light-blue', {
    primary: {
        color: 'light-blue',
        hue: 300
    },
    background: {
        color: 'light-blue',
        hue: 500,
        textColor: 'white'
    },
    accent: {
        color: 'white',
        hue: 900,
        textColor: 'white'
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
