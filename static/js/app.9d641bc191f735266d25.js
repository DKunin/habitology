webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Main__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HabitIncrement__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HabitLog__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_HabitAdd__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Settings__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_IncrementEdit__ = __webpack_require__(200);









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [{
        path: '/',
        name: 'main',
        component: __WEBPACK_IMPORTED_MODULE_2__components_Main__["a" /* default */]
    }, {
        path: '/habit-increment/:habitId',
        name: 'habit-increment',
        component: __WEBPACK_IMPORTED_MODULE_3__components_HabitIncrement__["a" /* default */]
    }, {
        path: '/habit-log',
        name: 'habit-log',
        component: __WEBPACK_IMPORTED_MODULE_4__components_HabitLog__["a" /* default */]
    }, {
        path: '/habit-add',
        name: 'habit-add',
        component: __WEBPACK_IMPORTED_MODULE_5__components_HabitAdd__["a" /* default */]
    }, {
        path: '/settings',
        name: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_6__components_Settings__["a" /* default */]
    }, {
        path: '/increment-edit',
        name: 'increment-edit',
        component: __WEBPACK_IMPORTED_MODULE_7__components_IncrementEdit__["a" /* default */]
    }]
}));

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

module.exports = {"name":"habitology","version":"1.5.1","description":"Simple app to work on habits","author":"Dmitri Kunin <whitemarten@gmail.com>","scripts":{"dev":"node build/dev-server.js","start":"node build/dev-server.js","build":"node build/build.js","pretty":"find ./src | grep .vue | while read i; do ./bin/pretty $i; done","csscomb":"find ./src | grep .vue | while read i; do ./bin/comb $i; done","publish":"npm run csscomb && npm run pretty && npm run lint && npm run build && ./bin/publish","test":"npm run csscomb && npm run pretty && npm run lint","lint":"eslint --ext .js,.vue src","report":"npm run build --report"},"dependencies":{"compare-semver":"1.1.0","deepmerge":"1.5.1","firebase":"4.3.1","moment":"2.18.1","vue":"2.4.4","vue-i18n":"7.2.0","vue-material":"0.7.4","vue-router":"^2.3.1","vuex":"2.3.1"},"devDependencies":{"autoprefixer":"^7.1.2","babel-core":"^6.22.1","babel-eslint":"^7.1.1","babel-loader":"^7.1.1","babel-plugin-transform-runtime":"^6.22.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0","chalk":"^2.0.1","connect-history-api-fallback":"^1.3.0","copy-webpack-plugin":"^4.0.1","css-loader":"^0.28.0","csscomb":"4.2.0","cssnano":"^3.10.0","eslint":"^3.19.0","eslint-config-standard":"^6.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.7.1","eslint-plugin-html":"^3.1.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-standard":"^2.0.1","eventsource-polyfill":"^0.9.6","express":"4.15.4","extract-text-webpack-plugin":"^2.0.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.1.3","gh-pages":"1.0.0","html-script-hook":"1.0.0","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.3","opn":"^5.1.0","optimize-css-assets-webpack-plugin":"^2.0.0","ora":"^1.2.0","prettier":"1.7.0","puppeteer":"0.10.2","rimraf":"^2.6.0","semver":"^5.3.0","shelljs":"^0.7.6","sw-precache-webpack-plugin":"^0.11.4","uglify-es":"^3.0.25","url-loader":"^0.5.8","vue-loader":"13.0.4","vue-style-loader":"^3.0.1","vue-template-compiler":"2.4.4","webpack":"^2.6.1","webpack-bundle-analyzer":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-hot-middleware":"^2.18.0","webpack-merge":"^4.1.0"},"engines":{"node":">= 6.0.0","npm":">= 3.0.0"},"browserslist":["Chrome >= 60","Safari >= 10.1","iOS >= 10.3","Firefox >= 54","Edge >= 15"]}

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EmptyCard_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_020117d0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_EmptyCard_vue__ = __webpack_require__(205);
function injectStyle (ssrContext) {
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-020117d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EmptyCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_020117d0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_EmptyCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    en: {
        titles: {
            main: 'Habits',
            menu: 'Menu',
            'habit-add': 'New Habit',
            settings: 'Settings',
            'habit-increment': 'Add habit score',
            'increment-edit': 'Edit score',
            'habit-log': 'Habit Log',
            log: 'Log',
            name: 'Name',
            date: 'Date',
            rating: 'Rating',
            goal: 'Goal',
            'continuing-goal': 'Have you already started this habit?',
            'initial-value': 'Initial value',
            nodata: 'no data',
            share: 'Share',
            defaultHabitName: 'Habit'
        },
        actions: {
            save: 'Save',
            cancel: 'Cancel',
            remove: 'Remove',
            addHabit: 'Habit',
            edit: 'Edit'
        },
        log: {
            habit: 'Habit',
            date: 'Date',
            score: 'Score'
        },
        settings: {
            locale: 'Locale',
            login: 'Log in',
            logout: 'Log out',
            signup: 'Sign Up',
            save: 'Save',
            email: 'email',
            password: 'password'
        },
        text: {
            nolog: "Add rating to a habit and it'll appear right here.",
            nohabits: "Add new habit and it'll appear here.",
            newVersion: 'Version {version} is ready to update, tap here to proceed',
            incrementSuccess: '{habitName} + {amount}!'
        },
        serverErrorMessages: {
            noerror: '',
            'user-not-found': 'User not found',
            'invalid-email': 'Email is badly formatted',
            'wrong-password': 'User not found, maybe you should register'
        }
    },
    ru: {
        titles: {
            main: 'Привычки',
            menu: 'Меню',
            'habit-add': 'Новая привычка',
            settings: 'Настройки',
            'habit-increment': 'Добавить оценку',
            'increment-edit': 'Редактировать оценку',
            'habit-log': 'История',
            log: 'История',
            name: 'Название',
            date: 'Дата',
            rating: 'Оценка',
            goal: 'Цель',
            'continuing-goal': 'Это уже начатая привычка?',
            'initial-value': 'Первоначальное значение',
            nodata: 'нет данных',
            share: 'Поделиться',
            defaultHabitName: 'Название привычки'
        },
        actions: {
            save: 'Сохранить',
            cancel: 'Отмена',
            remove: 'Удалить',
            addHabit: 'Привычка',
            edit: 'Редактировать'
        },
        log: {
            habit: 'Привычка',
            date: 'Дата',
            score: 'Счет'
        },
        settings: {
            locale: 'Язык',
            login: 'Войти',
            logout: 'Выйти',
            signup: 'Регистрация',
            save: 'Сохранить',
            email: 'email',
            password: 'пароль'
        },
        text: {
            nolog: 'Добавьте оценку к привычке и она появится здесь',
            nohabits: 'Добавьте новую привычку и она появится здесь',
            newVersion: 'Версия {version} доступна для обновления, тапните здесь, для обновления',
            incrementSuccess: '{habitName} + {amount}!'
        },
        serverErrorMessages: {
            noerror: '',
            'user-not-found': 'Пользователь не найден',
            'invalid-email': 'Email неверный или некорректно сформирован',
            'wrong-password': 'Неверный пароль'
        }
    }
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_persistPlugin__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_database__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_deepmerge__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_deepmerge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_deepmerge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_compare_semver__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_compare_semver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_compare_semver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__package_json__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_syncStates__ = __webpack_require__(92);
















__WEBPACK_IMPORTED_MODULE_3_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* default */]);

const randomId = () => parseInt(Math.random() * 1e10);

let config = {
    apiKey: 'AIzaSyD8-mtgEl3_PrD9mZe2iwPARtRDLen7nu4',
    authDomain: 'habitology-ffa70.firebaseapp.com',
    databaseURL: 'https://habitology-ffa70.firebaseio.com',
    projectId: 'habitology-ffa70',
    storageBucket: 'habitology-ffa70.appspot.com',
    messagingSenderId: '127457719546'
};

const basicState = {
    syncingState: __WEBPACK_IMPORTED_MODULE_13__config_syncStates__["a" /* SYNC_DONE */],
    habits: {},
    log: [],
    user: {},
    locale: 'ru',
    newVersion: false
};

const mutations = {
    incrementLog(state, payload) {
        state.log = state.log.concat(payload);
        state.syncingState = __WEBPACK_IMPORTED_MODULE_13__config_syncStates__["b" /* SYNC_OFF */];
    },
    updateHabit(state, payload) {
        if (!state.habits) {
            state.habits = {};
        }
        state.habits[payload.id] = payload;
        state.syncingState = __WEBPACK_IMPORTED_MODULE_13__config_syncStates__["b" /* SYNC_OFF */];
    },
    removeHabit(state, habitId) {
        state.habits = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(state.habits).reduce((newHabitsArray, singleHabitKey) => {
            const habit = state.habits[singleHabitKey];
            if (habit.id === parseInt(habitId)) {
                newHabitsArray[habit.id] = habit;
                newHabitsArray[habit.id].destroy = true;
            }
            newHabitsArray[habit.id] = habit;
            return newHabitsArray;
        }, {});

        state.log = state.log.reduce((newLog, singleLogItem) => {
            if (parseInt(singleLogItem.habitId) === parseInt(habitId)) {
                singleLogItem.destroy = true;
            }
            return newLog.concat(singleLogItem);
        }, []);

        state.syncingState = __WEBPACK_IMPORTED_MODULE_13__config_syncStates__["b" /* SYNC_OFF */];
    },
    updateLogItem(state, payload) {
        state.log = state.log.map(singleLogItem => {
            if (singleLogItem.id === payload.id) {
                return payload;
            }
            return singleLogItem;
        });
        state.syncingState = __WEBPACK_IMPORTED_MODULE_13__config_syncStates__["b" /* SYNC_OFF */];
    },
    removeLogItem(state, logItemId) {
        state.log = state.log.reduce((newLog, singleLogItem) => {
            if (parseInt(singleLogItem.id) === parseInt(logItemId)) {
                singleLogItem.destroy = true;
            }
            return newLog.concat(singleLogItem);
        }, []);
    },
    restoreState(state, payload) {
        state.habits = payload.habits;
        state.log = payload.log;
        state.user = payload.user;
        state.locale = payload.locale;
        __WEBPACK_IMPORTED_MODULE_5_moment___default.a.locale(payload.locale || 'ru');
        __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.initializeApp(config);
        window.firebase = __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a;
        setTimeout(() => {
            window.i18n.locale = payload.locale || 'ru';
        }, 200);
    },
    getUser(state, newUser) {
        state.user = {
            email: newUser.email,
            uid: newUser.uid
        };
    },
    setUser(state, newUser) {
        state.user = newUser;
    },
    logOut(state) {
        state.user = {};
        state.habits = {};
        state.log = [];
        state.syncingState = __WEBPACK_IMPORTED_MODULE_13__config_syncStates__["b" /* SYNC_OFF */];
    },
    saveSettings(state, newSettings) {
        state.locale = newSettings.locale;
        window.i18n.locale = newSettings.locale;
        __WEBPACK_IMPORTED_MODULE_5_moment___default.a.locale(newSettings.locale || 'ru');
    },
    checkForUpdate(state) {
        fetch('https://raw.githubusercontent.com/DKunin/habitology/master/package.json').then(res => res.json()).then(result => {
            if (__WEBPACK_IMPORTED_MODULE_11_compare_semver___default.a.lt(__WEBPACK_IMPORTED_MODULE_12__package_json___default.a.version, [result.version])) {
                state.newVersion = result.version;
            }
        });
    },
    syncWithCloud(state) {
        if (!__WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a || !state.user || !state.user.uid) {
            return;
        }
        if (!window.navigator.onLine) {
            state.syncingState = __WEBPACK_IMPORTED_MODULE_13__config_syncStates__["c" /* SYNC_DISCONNECTED */];
            return;
        }
        state.syncingState = __WEBPACK_IMPORTED_MODULE_13__config_syncStates__["d" /* SYNC_PROGRESS */];
        const ref = 'users/' + state.user.uid;
        __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref(ref).once('value').then(function (snapshot) {
            const { habits, log } = state;
            const localState = {
                habits,
                log
            };
            const serverState = snapshot.val() || {};
            let mergedState = {};
            mergedState.habits = __WEBPACK_IMPORTED_MODULE_10_deepmerge___default()(serverState.habits || {}, localState.habits);

            mergedState.log = __WEBPACK_IMPORTED_MODULE_10_deepmerge___default()(serverState.log || [], localState.log || []);

            const cleanedHabits = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(mergedState.habits).reduce((newState, singleHabit) => {
                if (mergedState.habits[singleHabit].destroy) {
                    return newState;
                }
                newState[singleHabit] = mergedState.habits[singleHabit];
                return newState;
            }, {});

            const cleanedLogs = mergedState.log.filter(singleLogItem => {
                return !singleLogItem.destroy;
            }, {});
            __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref('users/' + state.user.uid).update({ habits: cleanedHabits, log: cleanedLogs });

            state.habits = mergedState.habits;
            state.log = cleanedLogs;
            state.syncingState = __WEBPACK_IMPORTED_MODULE_13__config_syncStates__["a" /* SYNC_DONE */];
            localStorage.setItem('habitologyState', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()({
                log: cleanedLogs,
                habits: mergedState.habits,
                user: state.user,
                locale: state.locale
            }, null, 4));
        });
    }
};

const actions = {
    incrementLog({ commit, state }, payload) {
        commit('incrementLog', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({ id: randomId() }, payload));
    },
    updateHabit({ commit, state }, payload) {
        commit('updateHabit', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({ id: randomId() }, payload));
    },
    removeHabit({ commit, state }, habitId) {
        commit('removeHabit', habitId);
    },
    updateLogItem({ commit }, payload) {
        commit('updateLogItem', payload);
    },
    removeLogItem({ commit }, logItemId) {
        commit('removeLogItem', logItemId);
    },
    getUser({ commit }, user) {
        commit('getUser', user);
    },
    logOut({ commit }) {
        commit('logOut');
    },
    logIn({ commit }, newUser) {
        commit('getUser', newUser);
    },
    saveSettings({ commit }, newSettings) {
        commit('saveSettings', newSettings);
    },
    syncWithCloud({ commit }) {
        commit('syncWithCloud');
    },
    checkForUpdate({ commit }) {
        commit('checkForUpdate');
    }
};
const store = new __WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* default */].Store({
    state: basicState,
    actions,
    mutations,
    plugins: [__WEBPACK_IMPORTED_MODULE_6__utils_persistPlugin__["a" /* default */]]
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 89 */,
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_016e2485_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(204);
function injectStyle (ssrContext) {
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_016e2485_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 91 */,
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const SYNC_PROGRESS = 'cloud_upload';
/* harmony export (immutable) */ __webpack_exports__["d"] = SYNC_PROGRESS;

const SYNC_FAIL = 'cloud_off';
/* unused harmony export SYNC_FAIL */

const SYNC_DONE = 'cloud_queue';
/* harmony export (immutable) */ __webpack_exports__["a"] = SYNC_DONE;

const SYNC_OFF = 'cloud';
/* harmony export (immutable) */ __webpack_exports__["b"] = SYNC_OFF;

const SYNC_DISCONNECTED = 'cloud_off';
/* harmony export (immutable) */ __webpack_exports__["c"] = SYNC_DISCONNECTED;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_material__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_material___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_material__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_locale__ = __webpack_require__(87);












__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_material___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].material.registerTheme('default', {
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

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].material.registerTheme('reddy', {
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

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].material.registerTheme('orangy', {
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

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].material.registerTheme('bluey', {
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

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].material.registerTheme('light-blue', {
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
const i18n = new __WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]({
    locale: 'ru', // set locale
    messages: __WEBPACK_IMPORTED_MODULE_7__config_locale__["a" /* default */] // set locale messages
});

window.i18n = i18n;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */],
    i18n,
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_4__App__["a" /* default */] }
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);



const mutationsToSaveOn = ['incrementLog', 'updateHabit', 'removeHabit', 'updateLogItem', 'removeLogItem', 'restoreState', 'saveSettings', 'logIn', 'logOut', 'getUser'];

const persistPlugin = store => {
    let syncTimeout;
    const history = JSON.parse(localStorage.getItem('habitologyState') || '{"habits":{}, "log": [], "user": {}, "apiKey": "", "locale": "en", "newVersion": false}');

    if (history) {
        store.commit('restoreState', history);
    }

    store.subscribe(mutation => {
        if (mutationsToSaveOn.includes(mutation.type)) {
            clearTimeout(syncTimeout);
            syncTimeout = setTimeout(() => {
                store.commit('syncWithCloud');
            }, 3000);
            localStorage.setItem('habitologyState', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(store.state, null, 4));
        }
    });
};

/* harmony default export */ __webpack_exports__["a"] = (persistPlugin);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Logo__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package_json__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__package_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'app',
    components: {
        Logo: __WEBPACK_IMPORTED_MODULE_1__components_Logo__["a" /* default */]
    },
    data() {
        return {
            version: __WEBPACK_IMPORTED_MODULE_2__package_json___default.a.version,
            alert: {
                content: 'Tsest',
                ok: 'Ok'
            }
        };
    },
    mounted() {
        this.$store.dispatch('checkForUpdate');
        this.$store.subscribe(mutation => {
            if (mutation.type === 'incrementLog') {
                const amount = mutation.payload.amount;
                const habitName = this.$store.state.habits[mutation.payload.habitId].name;
                this.$set(this, 'alert', {
                    content: this.$t('text.incrementSuccess', {
                        amount,
                        habitName
                    }),
                    ok: 'ok'
                });
                this.openAlert();
            }
        });
    },
    methods: {
        reloadScreen() {
            window.location.reload();
        },
        gotoMain(name) {
            this.$refs.leftSidenav.close();
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name });
        },
        toggleLeftSidenav() {
            this.$refs.leftSidenav.toggle();
        },
        newHabit() {
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'habit-add' });
        },
        goBack() {
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].back();
        },
        syncWithCloud() {
            this.$store.dispatch('syncWithCloud');
        },
        openAlert() {
            this.$refs['alert-dialog'].open();
        },
        closeAlert() {
            this.$refs['alert-dialog'].close();
        }
    }
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'empty-card',
    props: {
        visibility: {
            type: Boolean,
            default: false
        },
        onClick: {
            type: Function,
            default: () => {}
        }
    }
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'habit-add',
    data() {
        return {
            name: '',
            goal: 1000,
            id: null,
            initialValue: null,
            continuingGoal: false,
            theme: 'default',
            themes: ['default', 'reddy', 'orangy', 'bluey', 'light-blue']
        };
    },
    mounted() {
        if (this.$route.query.habitId) {
            const editMode = this.$store.state.habits[this.$route.query.habitId];
            if (editMode) {
                this.$set(this, 'goal', editMode.goal);
                this.$set(this, 'id', editMode.id);
                this.$set(this, 'name', editMode.name);
                this.$set(this, 'theme', editMode.theme);
                this.$set(this, 'initialValue', editMode.initialValue || null);
                this.$set(this, 'continuingGoal', editMode.initialValue ? true : false);
            }
        }
    },
    methods: {
        cancel() {
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'main' });
        },
        update() {
            const payload = {
                goal: this.goal,
                name: this.name,
                theme: this.theme,
                initialValue: this.initialValue
            };
            if (this.id) {
                payload.id = this.id;
            }

            this.$store.dispatch('updateHabit', payload);
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'main' });
        },
        remove() {
            this.$store.dispatch('removeHabit', this.id);
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'main' });
        }
    }
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'habit-card',
    data() {
        return {};
    },
    props: {
        habit: {
            type: Object,
            default: {}
        },
        lastTime: {
            type: Function,
            default: () => {}
        }
    },
    mounted() {},
    methods: {
        habitIncrement(habitId) {
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'habit-increment', params: { habitId } });
        },
        editHabit(habitId) {
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'habit-add', query: { habitId } });
        },
        getHabitLog(habitId) {
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'habit-log', query: { habitId } });
        },
        shareResult(habit) {
            if (window.navigator.share) {
                window.navigator.share({
                    title: 'My habit goals',
                    text: `I reached ${this.percent}% of my ${habit.name} goal!`,
                    url: 'https://dkunin.github.io/habitology/'
                }).then(() => console.log('Successful share')).catch(error => console.log('Error sharing', error));
            }
        }
    },
    computed: {
        count() {
            const habit = this.habit;
            return this.$store.state.log.reduce((newCount, currentObject) => {
                if (currentObject.habitId === habit.id && !currentObject.destroy) {
                    return newCount + parseInt(currentObject.amount);
                }
                return newCount;
            }, parseInt(habit.initialValue) || 0);
        },
        percent() {
            return Math.ceil(this.count * 100 / this.habit.goal);
        }
    }
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const actions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])(['incrementLog']);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'habitIncrement',
    data() {
        return {
            date: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format('YYYY-MM-DDTHH:mm'),
            amount: null,
            habitId: this.$route.params.habitId
        };
    },
    watch: {
        amount() {
            this.update();
        }
    },
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(actions, {
        update() {
            const date = new Date(this.date);
            const newObject = {
                date,
                amount: parseInt(this.amount || 0),
                habitId: parseInt(this.habitId)
            };
            this.incrementLog(newObject);
            if (window.navigator) {
                window.navigator.vibrate(100, 50);
            }
            __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].push({ name: 'main' });
        },
        formatDate(dateTime) {
            return __WEBPACK_IMPORTED_MODULE_3_moment___default()(dateTime).format('DD.MM.YY');
        },
        cancel: function cancel() {
            __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].push({ name: 'main' });
        },
        showHabitName: function showHabitName(id) {
            return this.$store.state.habits[id].name;
        }
    })
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_EmptyCard__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'habit-log',
    data() {
        return {};
    },
    components: {
        EmptyCard: __WEBPACK_IMPORTED_MODULE_0__components_EmptyCard__["a" /* default */]
    },
    computed: {
        filtered() {
            let queryHabit = this.$route.query.habitId;
            if (queryHabit === undefined || queryHabit === null) {
                return this.$store.state.log.filter(({ destroy }) => !destroy);
            }
            queryHabit = parseInt(queryHabit);
            return this.$store.state.log.filter(({ destroy }) => !destroy).filter(({ habitId }) => queryHabit === habitId).sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
        }
    },
    methods: {
        formatDate(dateTime) {
            return __WEBPACK_IMPORTED_MODULE_1_moment___default()(new Date(dateTime)).calendar();
        },
        getHabitName(habitId) {
            const habit = this.$store.state.habits[habitId];
            if (!habit) {
                return '';
            }
            return habit.name;
        },
        editHabitIncrement(logId) {
            __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].push({ name: 'increment-edit', query: { logId } });
        },
        addHabitIncrement(habitId) {
            return () => {
                __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].push({ name: 'habit-increment', params: { habitId } });
            };
        }
    }
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'increment-edit',
    data() {
        return {
            amount: 0,
            date: null,
            habitId: null,
            id: null
        };
    },
    mounted() {
        const editMode = this.$store.state.log.find(singleLog => {
            return singleLog.id === parseInt(this.$route.query.logId);
        });

        if (editMode) {
            this.$set(this, 'amount', editMode.amount);
            this.$set(this, 'id', editMode.id);
            this.$set(this, 'date', __WEBPACK_IMPORTED_MODULE_1_moment___default()(new Date(editMode.date)).format('YYYY-MM-DDTHH:mm'));
            this.$set(this, 'habitId', editMode.habitId);
        }
    },
    methods: {
        cancel() {
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].back();
        },
        update() {
            const date = new Date(this.date);

            const payload = {
                amount: this.amount,
                id: this.id,
                date,
                habitId: this.habitId
            };

            this.$store.dispatch('updateLogItem', payload);
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].back();
        },
        remove() {
            this.$store.dispatch('removeLogItem', this.id);
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].back();
        },
        showHabitName(id) {
            if (!id) {
                return '-';
            }
            return this.$store.state.habits[id].name;
        }
    }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'logo'
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HabitCard__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_EmptyCard__ = __webpack_require__(86);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'main',
    data() {
        return {};
    },
    components: {
        HabitCard: __WEBPACK_IMPORTED_MODULE_2__components_HabitCard__["a" /* default */],
        EmptyCard: __WEBPACK_IMPORTED_MODULE_3__components_EmptyCard__["a" /* default */]
    },
    methods: {
        newHabit() {
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'habit-add' });
        },
        lastTime(habit) {
            const currentHabitLog = this.$store.state.log.filter(({ habitId }) => habit.id === habitId).sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            })[0];
            if (!currentHabitLog) {
                return null;
            }
            return __WEBPACK_IMPORTED_MODULE_1_moment___default()(new Date(currentHabitLog.date)).calendar();
        }
    }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__package_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'settings',
    data() {
        return {
            locale: this.$store.state.locale,
            email: '',
            password: '',
            errorCode: 'noerror',
            version: __WEBPACK_IMPORTED_MODULE_0__package_json___default.a.version
        };
    },
    methods: {
        signIn() {
            window.firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
                this.$store.dispatch('logIn', user);
            }).catch(error => {
                this.$set(this, 'errorCode', error.code.replace('auth/', ''));
                this.$refs.snackbar.open();
            });
        },
        logOut() {
            window.firebase.auth().signOut().then(() => {
                this.$store.dispatch('logOut');
            });
        },
        signUp() {
            window.firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
                this.signIn();
            }).catch(error => {
                this.$set(this, 'errorCode', error.message);
                this.$refs.snackbar.open();
            });
        },
        saveSettings() {
            this.$store.dispatch('saveSettings', {
                locale: this.locale
            });
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }
});

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-au": 80,
	"./en-au.js": 80,
	"./en-ca": 81,
	"./en-ca.js": 81,
	"./en-gb": 82,
	"./en-gb.js": 82,
	"./en-ie": 83,
	"./en-ie.js": 83,
	"./en-nz": 84,
	"./en-nz.js": 84,
	"./ru": 85,
	"./ru.js": 85
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 192;

/***/ }),
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HabitAdd_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_158fd58a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HabitAdd_vue__ = __webpack_require__(207);
function injectStyle (ssrContext) {
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-158fd58a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HabitAdd_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_158fd58a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HabitAdd_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HabitCard_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f92c612_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HabitCard_vue__ = __webpack_require__(210);
function injectStyle (ssrContext) {
  __webpack_require__(142)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HabitCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f92c612_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HabitCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HabitIncrement_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bf7b098_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HabitIncrement_vue__ = __webpack_require__(211);
function injectStyle (ssrContext) {
  __webpack_require__(143)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3bf7b098"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HabitIncrement_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bf7b098_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HabitIncrement_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HabitLog_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e63f6ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HabitLog_vue__ = __webpack_require__(212);
function injectStyle (ssrContext) {
  __webpack_require__(144)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e63f6ad"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HabitLog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e63f6ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HabitLog_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IncrementEdit_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a816c6c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_IncrementEdit_vue__ = __webpack_require__(209);
function injectStyle (ssrContext) {
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2a816c6c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IncrementEdit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a816c6c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_IncrementEdit_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Logo_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09a3c7b0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Logo_vue__ = __webpack_require__(206);
function injectStyle (ssrContext) {
  __webpack_require__(138)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Logo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09a3c7b0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Logo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc58b594_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__ = __webpack_require__(213);
function injectStyle (ssrContext) {
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc58b594_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Settings_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_259cdc20_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Settings_vue__ = __webpack_require__(208);
function injectStyle (ssrContext) {
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-259cdc20"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Settings_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_259cdc20_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Settings_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('md-sidenav', {
    ref: "leftSidenav",
    staticClass: "md-left",
    attrs: {
      "md-swipeable": ""
    }
  }, [_c('md-toolbar', {
    staticClass: "md-small"
  }, [_c('div', {
    staticClass: "md-toolbar-container"
  }, [_c('h3', {
    staticClass: "md-title"
  }, [_c('Logo')], 1)])]), _vm._v(" "), _c('md-list', [_c('md-list-item', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.gotoMain('habit-add')
      }
    }
  }, [_c('md-icon', [_vm._v("add")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('actions.addHabit')))])], 1), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.gotoMain('habit-log')
      }
    }
  }, [_c('md-icon', [_vm._v("history")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('titles.habit-log')))])], 1), _vm._v(" "), _c('div', {
    staticClass: "separator"
  }), _vm._v(" "), _c('md-list-item', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.gotoMain('settings')
      }
    }
  }, [_c('md-icon', [_vm._v("settings")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('titles.settings')))])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "version"
  }, [_c('div', [_vm._v(_vm._s(_vm.version))]), _vm._v(" "), (_vm.$store.state.newVersion) ? _c('div', {
    on: {
      "click": _vm.reloadScreen
    }
  }, [_vm._v(_vm._s(_vm.$t('text.newVersion', {
    version: _vm.$store.state.newVersion
  })))]) : _vm._e()])], 1), _vm._v(" "), _c('md-toolbar', [(_vm.$route.name === 'main') ? _c('md-button', {
    staticClass: "md-icon-button",
    on: {
      "click": _vm.toggleLeftSidenav
    }
  }, [_c('md-icon', [_vm._v("menu")])], 1) : _vm._e(), _vm._v(" "), (_vm.$route.name !== 'main') ? _c('md-button', {
    staticClass: "md-icon-button",
    on: {
      "click": _vm.goBack
    }
  }, [_c('md-icon', [_vm._v("arrow_back")])], 1) : _vm._e(), _vm._v(" "), _c('h2', {
    staticClass: "md-title",
    staticStyle: {
      "flex": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t(("titles." + (_vm.$route.name)))))]), _vm._v(" "), (_vm.$store.state.user.uid) ? _c('md-button', {
    staticClass: "md-icon-button",
    on: {
      "click": _vm.syncWithCloud
    }
  }, [_c('md-icon', [_vm._v(_vm._s(_vm.$store.state.syncingState))])], 1) : _vm._e(), _vm._v(" "), (false) ? _c('md-menu', {
    attrs: {
      "md-size": "4"
    }
  }, [_c('md-button', {
    staticClass: "md-icon-button",
    attrs: {
      "md-menu-trigger": ""
    }
  }, [_c('md-icon', [_vm._v("more_vert")])], 1), _vm._v(" "), _c('md-menu-content', [_c('md-menu-item', {
    on: {
      "click": _vm.newHabit
    }
  }, [_c('md-icon', [_vm._v("add")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('actions.addHabit')))])], 1)], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c('md-dialog-alert', {
    ref: "alert-dialog",
    attrs: {
      "md-content": _vm.alert.content,
      "md-ok-text": _vm.alert.ok
    }
  }), _vm._v(" "), _c('router-view')], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visibility) ? _c('md-card', {
    staticClass: "empty-card"
  }, [_c('md-card-content', [_c('div', {
    on: {
      "click": _vm.onClick
    }
  }, [_c('md-icon', {
    staticClass: "md-size-2x"
  }, [_vm._v("add_circle_outline")])], 1)])], 1) : _vm._e()
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    attrs: {
      "width": "40",
      "height": "40",
      "viewBox": "0 0 325 301",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('title', [_vm._v("Group 2")]), _c('g', {
    attrs: {
      "fill": "#fff",
      "fill-rule": "evenodd"
    }
  }, [_c('path', {
    attrs: {
      "d": "M151.319 119.035c7.053.713 11.25.45 12.59-.79 2.01-1.86 3.163-13.378 3.163-21.16V34.939c0-12.9-9.438-20.627-9.438-26.472 0-5.846 4.38-8.466 9.747-8.466h78.223c5.367 0 9.686 2.486 9.686 8.331 0 5.846-9.254 13.169-9.254 26.27v62.485c0 17.334 3.825 33.527 11.721 47.166l1.666 2.754 29.488 48.644 30.413 49.047c3.579 6.047 5.614 13.505 5.676 21.231 0 18.813-9.994 35.072-38.988 35.072H127.097c-28.933 0-38.988-16.26-38.988-35.072 0-7.726 2.035-15.251 5.614-21.298l30.351-48.98 16.247-28.605H54.607v97.807c0 12.036-2.574 21.03-7.722 26.982-5.148 5.951-11.767 8.927-19.857 8.927-8.213 0-14.77-3.009-19.674-9.027C2.451 285.716 0 276.756 0 264.852V35.71C0 23.807 2.42 14.88 7.263 8.928 12.104 2.976 18.693 0 27.028 0 35.24 0 41.89 2.943 46.977 8.828c5.086 5.886 7.63 14.847 7.63 26.882v83.325h96.712zm21.248 13.07l-131.906-1.378c0-11.288.582-57.803.582-63.447V34.654c0-7.009-1.481-12.227-4.444-15.655-2.962-3.428-5.399-5.141-10.181-5.141-4.854 0-6.31 1.79-9.13 5.257-2.819 3.466-4.229 8.665-4.229 15.597v229.34c0 6.932 1.428 12.15 4.283 15.655 2.856 3.504 4.293 5.199 9.076 5.199 4.711 0 7.13-1.733 10.128-5.2 2.998-3.465 4.497-8.703 4.497-15.712L40.89 154.4l121.401 1.378h4.1l-40.829 69.458-17.676 28.524c-2.084 3.522-3.27 7.904-3.27 12.404 0 10.956 5.857 20.425 22.707 20.425h158.982c16.885 0 22.706-9.47 22.706-20.425-.036-4.5-1.222-8.843-3.306-12.365l-17.712-28.563-49.845-80.902-.97-1.604c-4.6-7.943-6.827-17.373-6.827-27.468 0 0 .252-77.508.252-85.138 0-7.63 5.64-8.011 5.64-11.415 0-3.405-2.514-4.852-5.64-4.852l-47.597-.36c-3.125 0-5.676 1.526-5.676 4.93 0 3.405 5.245 4.021 5.245 11.534 0 7.512-.251 84.942-.251 84.942 0 2.73-.422 6.275-1.42 10.458-.665 2.79-3.444 5.037-8.337 6.742z"
    }
  }), _c('path', {
    attrs: {
      "d": "M118.552 260.689l8.405-14.3 7.694-13.145 26.186-44.633.711-1.228c.194-.289.453-.577.647-.866l.065-.145L170.794 172h70.735l7.565 12.928.064.072c.13.217.324.433.453.65l27.738 47.45 9.763 16.756.646 1.083.324.578 5.43 9.244c.97 1.517 1.488 3.467 1.488 5.489 0 5.417-3.944 9.75-8.729 9.75H125.73c-4.85 0-8.729-4.406-8.729-9.75 0-1.806.388-3.539 1.228-4.983.13-.217.194-.361.324-.578zm130.994-74.967c.065.145.259.434.453.795l-.065-.145c-.194-.289-.323-.578-.388-.65zm-73.32 25.061c.97-1.083 1.487-2.6 1.487-4.116a6.58 6.58 0 0 0-1.487-4.117c-.97-1.083-2.328-1.661-3.621-1.661-1.358 0-2.716.578-3.621 1.661-.97 1.083-1.487 2.6-1.487 4.117a6.58 6.58 0 0 0 1.487 4.116c.97 1.084 2.263 1.661 3.62 1.661 1.294 0 2.652-.65 3.622-1.66zm-23.277 40.95l15.194-25.927c1.552-2.673.906-6.284-1.487-8.017-.905-.65-1.875-.939-2.845-.939-1.68 0-3.297.939-4.202 2.6l-15.195 25.928c-1.551 2.672-.905 6.283 1.488 8.016.905.65 1.875.94 2.78.94 1.616 0 3.297-.94 4.267-2.6z",
      "fill-rule": "nonzero"
    }
  })])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.id),
      expression: "id"
    }],
    attrs: {
      "type": "hidden"
    },
    domProps: {
      "value": (_vm.id)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.id = $event.target.value
      }
    }
  }), _vm._v(" "), _c('md-list', {
    staticClass: "md-double-line"
  }, [_c('md-list-item', [_c('md-input-container', [_c('label', [_vm._v(_vm._s(_vm.$t("titles.name")))]), _vm._v(" "), _c('md-input', {
    model: {
      value: (_vm.name),
      callback: function($$v) {
        _vm.name = $$v
      },
      expression: "name"
    }
  })], 1)], 1), _vm._v(" "), _c('md-list-item', [_c('md-input-container', [_c('label', [_vm._v(_vm._s(_vm.$t("titles.goal")))]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "number"
    },
    model: {
      value: (_vm.goal),
      callback: function($$v) {
        _vm.goal = $$v
      },
      expression: "goal"
    }
  })], 1)], 1), _vm._v(" "), _c('md-list-item', [_c('div', {
    staticClass: "themes"
  }, _vm._l((_vm.themes), function(color) {
    return _c('div', [_c('label', {
      class: 'single-theme ' + color,
      attrs: {
        "for": color
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.theme),
        expression: "theme"
      }],
      staticClass: "theme-radio",
      attrs: {
        "id": color,
        "type": "radio",
        "name": "theme"
      },
      domProps: {
        "value": color,
        "checked": _vm._q(_vm.theme, color)
      },
      on: {
        "__c": function($event) {
          _vm.theme = color
        }
      }
    }), _vm._v(" "), _c('md-icon', {
      staticClass: "color-check"
    }, [_vm._v("check")])], 1)])
  }))]), _vm._v(" "), _c('md-list-item', [_c('md-checkbox', {
    attrs: {
      "name": "continuingGoal"
    },
    model: {
      value: (_vm.continuingGoal),
      callback: function($$v) {
        _vm.continuingGoal = $$v
      },
      expression: "continuingGoal"
    }
  }, [_vm._v(_vm._s(_vm.$t("titles.continuing-goal")))])], 1), _vm._v(" "), (_vm.continuingGoal || _vm.initialValue) ? _c('md-list-item', [_c('md-input-container', [_c('label', [_vm._v(_vm._s(_vm.$t("titles.initial-value")))]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "number"
    },
    model: {
      value: (_vm.initialValue),
      callback: function($$v) {
        _vm.initialValue = $$v
      },
      expression: "initialValue"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('md-list-item', [(_vm.id) ? _c('md-button', {
    staticClass: "md-raised md-accent",
    on: {
      "click": _vm.remove
    }
  }, [_vm._v(_vm._s(_vm.$t("actions.remove")))]) : _vm._e(), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    on: {
      "click": _vm.update
    }
  }, [_vm._v(_vm._s(_vm.$t("actions.save")))])], 1)], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('md-list', {
    staticClass: "md-double-line"
  }, [(_vm.$store.state.user && _vm.$store.state.user.email) ? _c('md-list-item', [_c('div', [_vm._v(_vm._s(_vm.$store.state.user.email))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    on: {
      "click": function($event) {
        _vm.logOut()
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("settings.logout")) + "\n            ")])], 1) : _vm._e(), _vm._v(" "), (!_vm.$store.state.user.email) ? _c('md-list-item', [_c('md-input-container', [_c('label', [_vm._v(_vm._s(_vm.$t("settings.email")))]), _vm._v(" "), _c('md-input', {
    model: {
      value: (_vm.email),
      callback: function($$v) {
        _vm.email = $$v
      },
      expression: "email"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), (!_vm.$store.state.user.email) ? _c('md-list-item', [_c('md-input-container', {
    attrs: {
      "md-has-password": ""
    }
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("settings.password")))]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), (!_vm.$store.state.user.email) ? _c('md-list-item', [_c('md-button', {
    staticClass: "md-raised",
    on: {
      "click": function($event) {
        _vm.signUp()
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("settings.signup")) + "\n            ")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    on: {
      "click": function($event) {
        _vm.signIn()
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("settings.login")) + "\n            ")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "separator"
  }), _vm._v(" "), _c('md-list-item', [_c('md-input-container', [_c('label', {
    attrs: {
      "for": "locale"
    }
  }, [_vm._v(_vm._s(_vm.$t("settings.locale")))]), _vm._v(" "), _c('md-select', {
    attrs: {
      "name": "locale"
    },
    model: {
      value: (_vm.locale),
      callback: function($$v) {
        _vm.locale = $$v
      },
      expression: "locale"
    }
  }, [_c('md-option', {
    attrs: {
      "value": "ru"
    }
  }, [_vm._v("Русский")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "en"
    }
  }, [_vm._v("English")])], 1)], 1)], 1), _vm._v(" "), _c('md-list-item', [_c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.saveSettings
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("settings.save")) + "\n            ")])], 1)], 1), _vm._v(" "), _c('md-snackbar', {
    ref: "snackbar",
    attrs: {
      "md-position": "bottom center",
      "md-duration": 4000
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t(("serverErrorMessages." + _vm.errorCode))))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-accent",
    attrs: {
      "md-theme": "default"
    },
    on: {
      "click": function($event) {
        _vm.$refs.snackbar.close()
      }
    }
  }, [_vm._v("Close")])], 1), _vm._v(" "), _c('div', {
    staticClass: "version"
  }, [_vm._v(_vm._s(_vm.version))])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.id),
      expression: "id"
    }],
    attrs: {
      "type": "hidden"
    },
    domProps: {
      "value": (_vm.id)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.id = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.habitId),
      expression: "habitId"
    }],
    attrs: {
      "type": "hidden"
    },
    domProps: {
      "value": (_vm.habitId)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.habitId = $event.target.value
      }
    }
  }), _vm._v(" "), _c('md-list', {
    staticClass: "md-single-line"
  }, [(false) ? _c('md-list-item', [_c('span', {
    staticClass: "md-subheading"
  }, [_vm._v(_vm._s(_vm.showHabitName(_vm.habitId)))])]) : _vm._e(), _vm._v(" "), _c('md-list-item', [_c('md-input-container', [_c('md-icon', [_vm._v("event")]), _vm._v(" "), _c('label', [_vm._v("Date")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "datetime-local"
    },
    model: {
      value: (_vm.date),
      callback: function($$v) {
        _vm.date = $$v
      },
      expression: "date"
    }
  })], 1)], 1), _vm._v(" "), _c('md-list-item', [(false) ? _c('md-input-container', [_c('md-icon', [_vm._v("star")]), _vm._v(" "), _c('label', [_vm._v("Rating")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "number"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "radio-holder"
  }, [_c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "1"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "2"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "3"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "4"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("4")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "5"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("5")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "6"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("6")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "7"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("7")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "8"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("8")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "9"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("9")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "10"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("10")])], 1)], 1), _vm._v(" "), _c('md-list-item', [_c('md-button', {
    staticClass: "md-raised md-accent",
    on: {
      "click": _vm.remove
    }
  }, [_vm._v(_vm._s(_vm.$t("actions.remove")))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    on: {
      "click": _vm.update
    }
  }, [_vm._v(_vm._s(_vm.$t("actions.save")))])], 1)], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-card', {
    attrs: {
      "md-theme": _vm.habit.theme ? _vm.habit.theme : 'default'
    }
  }, [_c('md-card-header', [_c('div', {
    staticClass: "md-title",
    on: {
      "click": function($event) {
        _vm.getHabitLog(_vm.habit.id)
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.habit.name) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "md-subhead"
  }, [_vm._v("\n        " + _vm._s(_vm.count) + " (" + _vm._s(_vm.percent) + "%) \n        "), _c('div', {
    staticClass: "last-update"
  }, [_vm._v(_vm._s(_vm.$props.lastTime(_vm.habit)))])])]), _vm._v(" "), _c('md-card-actions', [_c('md-button', {
    staticClass: "md-icon-button md-list-action",
    on: {
      "click": function($event) {
        _vm.habitIncrement(_vm.habit.id)
      }
    }
  }, [_c('md-icon', {
    staticClass: "md-accent"
  }, [_vm._v("add")])], 1), _vm._v(" "), _c('md-menu', {
    attrs: {
      "md-size": "5",
      "md-direction": "bottom left",
      "md-close-on-select": true,
      "md-align-trigger": true
    }
  }, [_c('md-button', {
    staticClass: "md-icon-button",
    attrs: {
      "md-menu-trigger": ""
    }
  }, [_c('md-icon', [_vm._v("more_horiz")])], 1), _vm._v(" "), _c('md-menu-content', [_c('md-menu-item', {
    on: {
      "click": function($event) {
        _vm.editHabit(_vm.habit.id)
      }
    }
  }, [_c('md-icon', {
    staticClass: "md-accent"
  }, [_vm._v("create")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('actions.edit')))])], 1), _vm._v(" "), _c('md-menu-item', {
    on: {
      "click": function($event) {
        _vm.getHabitLog(_vm.habit.id)
      }
    }
  }, [_c('md-icon', {
    staticClass: "md-accent"
  }, [_vm._v("update")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('titles.log')))])], 1), _vm._v(" "), _c('md-menu-item', {
    on: {
      "click": function($event) {
        _vm.shareResult(_vm.habit)
      }
    }
  }, [_c('md-icon', {
    staticClass: "md-accent"
  }, [_vm._v("share")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('titles.share')))])], 1)], 1)], 1)], 1), _vm._v(" "), _c('md-progress', {
    attrs: {
      "md-progress": _vm.percent
    }
  })], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.habitId),
      expression: "habitId"
    }],
    attrs: {
      "type": "hidden"
    },
    domProps: {
      "value": (_vm.habitId)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.habitId = $event.target.value
      }
    }
  }), _vm._v(" "), _c('md-list', {
    staticClass: "md-single-line"
  }, [(false) ? _c('md-list-item', [_c('span', {
    staticClass: "md-subheading"
  }, [_vm._v(_vm._s(_vm.showHabitName(_vm.habitId)))])]) : _vm._e(), _vm._v(" "), _c('md-list-item', [_c('md-input-container', [_c('md-icon', [_vm._v("event")]), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$t("titles.date")))]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "datetime-local"
    },
    model: {
      value: (_vm.date),
      callback: function($$v) {
        _vm.date = $$v
      },
      expression: "date"
    }
  })], 1)], 1), _vm._v(" "), _c('md-list-item', [(false) ? _c('md-input-container', [_c('md-icon', [_vm._v("star")]), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$t("titles.rating")))]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "number"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "radio-holder"
  }, [_c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "1"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "2"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "3"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "4"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("4")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "5"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("5")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "6"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("6")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "7"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("7")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "8"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("8")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "9"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("9")]), _vm._v(" "), _c('md-radio', {
    attrs: {
      "name": "amount",
      "md-value": "10"
    },
    model: {
      value: (_vm.amount),
      callback: function($$v) {
        _vm.amount = $$v
      },
      expression: "amount"
    }
  }, [_vm._v("10")])], 1), _vm._v(" "), (false) ? _c('md-list-item', [_c('md-button', {
    staticClass: "md-raised md-primary",
    on: {
      "click": _vm.update
    }
  }, [_vm._v(_vm._s(_vm.$t("actions.save")))])], 1) : _vm._e()], 1)], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [(!_vm.filtered.length) ? _c('div', {
    staticClass: "no-data-screen"
  }, [_c('div', [_c('md-icon', {
    staticClass: "md-size-4x"
  }, [_vm._v("update")])], 1), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.$t("text.nolog")))])]) : _vm._e(), _vm._v(" "), (_vm.filtered.length) ? _c('md-list', _vm._l((_vm.filtered), function(log, index) {
    return _c('md-list-item', {
      key: index
    }, [_c('md-avatar', [_c('div', {
      staticClass: "log-item",
      on: {
        "click": function($event) {
          _vm.editHabitIncrement(log.id)
        }
      }
    }, [_vm._v(_vm._s(log.amount))])]), _vm._v(" "), _c('div', {
      staticClass: "md-list-text-container"
    }, [_c('span', [_vm._v(_vm._s(_vm.getHabitName(log.habitId)) + " "), _c('a', {
      staticClass: "edit-log",
      on: {
        "click": function($event) {
          _vm.editHabitIncrement(log.id)
        }
      }
    }, [_c('md-icon', {
      staticClass: "md-primary"
    }, [_vm._v("create")])], 1)]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formatDate(log.date)))])])], 1)
  })) : _vm._e(), _vm._v(" "), _c('EmptyCard', {
    attrs: {
      "visibility": Boolean(_vm.$route.query.habitId),
      "onClick": _vm.addHabitIncrement(_vm.$route.query.habitId)
    }
  })], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [(!Object.keys(_vm.$store.state.habits).length) ? _c('div', {
    staticClass: "no-data-screen"
  }, [_c('div', {
    on: {
      "click": _vm.newHabit
    }
  }, [_c('md-icon', {
    staticClass: "md-size-4x"
  }, [_vm._v("add_circle_outline")])], 1), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.$t("text.nohabits")))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.$store.state.habits), function(habit) {
    return (_vm.$store.state.habits && !habit.destroy) ? _c('HabitCard', {
      key: habit.id,
      attrs: {
        "habit": habit,
        "lastTime": _vm.lastTime
      }
    }) : _vm._e()
  }), _vm._v(" "), _c('EmptyCard', {
    attrs: {
      "visibility": Boolean(Object.keys(_vm.$store.state.habits).length),
      "onClick": _vm.newHabit
    }
  }), _vm._v(" "), (false) ? _c('md-button', {
    staticClass: "md-fab md-primary add-button",
    on: {
      "click": _vm.newHabit
    }
  }, [_c('md-icon', [_vm._v("add")])], 1) : _vm._e()], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[93]);
//# sourceMappingURL=app.9d641bc191f735266d25.js.map