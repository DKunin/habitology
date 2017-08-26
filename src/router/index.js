import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import HabitEdit from '@/components/HabitEdit';
import HabitIncrement from '@/components/HabitIncrement';
import HabitLog from '@/components/HabitLog';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/habit-edit/:habitId',
            name: 'habit-edit',
            component: HabitEdit
        },
        {
            path: '/habit-increment/:habitId',
            name: 'habit-increment',
            component: HabitIncrement
        },
        {
            path: '/habit-log/:habitId',
            name: 'habit-log',
            component: HabitLog
        }
    ]
});
