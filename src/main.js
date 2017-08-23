import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './store';

Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
