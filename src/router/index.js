import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import HabitEdit from '@/components/HabitEdit';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/habit-edit',
            name: 'habit-edit',
            component: HabitEdit
        }
    ]
});
