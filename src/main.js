import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './store';
import VueMaterial from 'vue-material';

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
