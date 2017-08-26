import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import HabitEdit from '@/components/HabitEdit';
import HabitIncrement from '@/components/HabitIncrement';
import HabitLog from '@/components/HabitLog';
import HabitAdd from '@/components/HabitAdd';
import Settings from '@/components/Settings';

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
        }
    ]
});
