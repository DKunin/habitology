webpackJsonp([0],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HabitLog_vue__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e63f6ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HabitLog_vue__ = __webpack_require__(316);
function injectStyle (ssrContext) {
  __webpack_require__(310)
}
var normalizeComponent = __webpack_require__(2)
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_EmptyCard__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_streak__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_streak___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_streak__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {};
    },

    components: {
        EmptyCard: __WEBPACK_IMPORTED_MODULE_0__components_EmptyCard__["a" /* default */]
    },
    computed: {
        filtered: function filtered() {
            var queryHabit = this.$route.query.habitId;
            if (queryHabit === undefined || queryHabit === null) {
                return this.$store.state.log.filter(function (_ref) {
                    var destroy = _ref.destroy;
                    return !destroy;
                });
            }
            queryHabit = parseInt(queryHabit);
            return this.$store.state.log.filter(function (_ref2) {
                var destroy = _ref2.destroy;
                return !destroy;
            }).filter(function (_ref3) {
                var habitId = _ref3.habitId;
                return queryHabit === habitId;
            }).sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });
        },
        streakInfo: function streakInfo() {
            var dates = this.filtered.map(function (_ref4) {
                var date = _ref4.date;
                return date;
            });
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_streak__["determineStreak"])(dates);
        }
    },
    methods: {
        formatDate: function formatDate(dateTime) {
            return __WEBPACK_IMPORTED_MODULE_1_moment___default()(new Date(dateTime)).calendar();
        },
        getHabitName: function getHabitName(habitId) {
            var habit = this.$store.state.habits[habitId];
            if (!habit) {
                return '';
            }
            return habit.name;
        },
        editHabitIncrement: function editHabitIncrement(logId) {
            __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].push({ name: 'increment-edit', query: { logId: logId } });
        },
        addHabitIncrement: function addHabitIncrement(habitId) {
            return function () {
                __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].push({ name: 'habit-increment', params: { habitId: habitId } });
            };
        }
    }
});

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(285)(true);
// imports


// module
exports.push([module.i, ".md-whiteframe-8dp[data-v-6e63f6ad]{margin:15px}.md-avatar[data-v-6e63f6ad]{display:flex;justify-content:center;align-items:center}.log-item[data-v-6e63f6ad]{font-size:25px}.empty-card[data-v-6e63f6ad]{margin:20px}.edit-log[data-v-6e63f6ad]{float:right;opacity:.4}", "", {"version":3,"sources":["/Users/dkunin/Projects/habitology/src/components/HabitLog.vue"],"names":[],"mappings":"AACA,oCACI,WAAa,CAChB,AACD,4BACI,aAAc,AACd,uBAAwB,AACxB,kBAAoB,CACvB,AACD,2BACI,cAAgB,CACnB,AACD,6BACI,WAAa,CAChB,AACD,2BACI,YAAa,AACb,UAAY,CACf","file":"HabitLog.vue","sourcesContent":["\n.md-whiteframe-8dp[data-v-6e63f6ad] {\n    margin: 15px;\n}\n.md-avatar[data-v-6e63f6ad] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.log-item[data-v-6e63f6ad] {\n    font-size: 25px;\n}\n.empty-card[data-v-6e63f6ad] {\n    margin: 20px;\n}\n.edit-log[data-v-6e63f6ad] {\n    float: right;\n    opacity: .4;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const todayBegingOfTheDay = new Date();
const todayEndingOfTheDay = new Date();
todayBegingOfTheDay.setHours(0);
todayBegingOfTheDay.setMinutes(0);
todayEndingOfTheDay.setHours(23);
todayEndingOfTheDay.setMinutes(59);

function determineStreak(dateArray) {
    const normalizeDates = dateArray
        .filter(Boolean)
        .map(singleDate => new Date(singleDate).getTime())
        .sort()
        .reverse();

    const lastStreak = normalizeDates.reduce(
        (newArrayOfStreaks, singleItem) => {
            const currentItem = new Date(singleItem).getDay();
            let prevNumber =
                new Date(
                    newArrayOfStreaks[newArrayOfStreaks.length - 1]
                ).getDay() - 1 || 0;
            if (prevNumber < 0) {
                prevNumber = 6;
            }

            if (!newArrayOfStreaks.length || prevNumber === currentItem) {
                return newArrayOfStreaks.concat(singleItem);
            }

            return newArrayOfStreaks;
        },
        []
    );

    const isThereAToday = lastStreak.some(
        singleDay =>
            singleDay < todayEndingOfTheDay && singleDay > todayBegingOfTheDay
    );

    return {
        isCurrentlyOnStreak: isThereAToday,
        lengthOfTheLastStreak: lastStreak.length
    };
}

module.exports = {
    determineStreak
};


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(303);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(286)("1ee1a21d", content, true);

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [(_vm.filtered.length) ? _c('md-whiteframe', {
    attrs: {
      "md-tag": "section",
      "md-elevation": "8"
    }
  }, [_c('md-list', [_c('md-list-item', [_vm._v("\n              " + _vm._s(_vm.$t('titles.allItems')) + " " + _vm._s(_vm.filtered.length) + "\n          ")]), _vm._v(" "), (_vm.streakInfo.isCurrentlyOnStreak) ? _c('md-list-item', [_vm._v("\n              " + _vm._s(_vm.$t('titles.currentStreak')) + " " + _vm._s(_vm.streakInfo.lengthOfTheLastStreak) + "\n          ")]) : _vm._e(), _vm._v(" "), (!_vm.streakInfo.isCurrentlyOnStreak) ? _c('md-list-item', [_vm._v("\n              " + _vm._s(_vm.$t('titles.lastStreak')) + " " + _vm._s(_vm.streakInfo.lengthOfTheLastStreak) + "\n          ")]) : _vm._e()], 1)], 1) : _vm._e(), _vm._v(" "), (!_vm.filtered.length) ? _c('div', {
    staticClass: "no-data-screen"
  }, [_c('div', [_c('Icon', {
    attrs: {
      "className": "",
      "size": 50
    }
  }, [_c('IconUpdate')], 1)], 1), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.$t("text.nolog")))])]) : _vm._e(), _vm._v(" "), (_vm.filtered.length) ? _c('md-list', _vm._l((_vm.filtered), function(log, index) {
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
    }, [_c('Icon', [_c('IconCreate')], 1)], 1)]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formatDate(log.date)))])])], 1)
  })) : _vm._e(), _vm._v(" "), (_vm.filtered.length) ? _c('EmptyCard', {
    attrs: {
      "visibility": Boolean(_vm.$route.query.habitId),
      "onClick": _vm.addHabitIncrement(_vm.$route.query.habitId)
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=0.3af6f82f6e032fdf371c.js.map