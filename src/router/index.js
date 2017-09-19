import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import HabitIncrement from '@/components/HabitIncrement';
import HabitLog from '@/components/HabitLog';
import HabitAdd from '@/components/HabitAdd';
import Settings from '@/components/Settings';
import IncrementEdit from '@/components/IncrementEdit';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/habit-increment/:habitId',
            name: 'habit-increment',
            component: HabitIncrement
        },
        {
            path: '/habit-log',
            name: 'habit-log',
            component: HabitLog
        },
        {
            path: '/habit-add',
            name: 'habit-add',
            component: HabitAdd
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        },
        {
            path: '/increment-edit',
            name: 'increment-edit',
            component: IncrementEdit
        }
    ]
});
