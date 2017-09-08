webpackJsonp([1],[function(t,e,a){"use strict";var n=a(3),i=a(82),o=a(73),s=a.n(o),d=a(70),c=a.n(d),r=a(71),l=a.n(r),u=a(69),m=a.n(u),v=a(74),h=a.n(v),f=a(72),b=a.n(f);n.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"main",component:s.a},{path:"/habit-increment/:habitId",name:"habit-increment",component:c.a},{path:"/habit-log",name:"habit-log",component:l.a},{path:"/habit-add",name:"habit-add",component:m.a},{path:"/settings",name:"settings",component:h.a},{path:"/increment-edit",name:"increment-edit",component:b.a}]})},,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";e.a={en:{titles:{main:"Habits",menu:"Menu","habit-add":"New Habit",settings:"Settings","habit-increment":"Add habit score","increment-edit":"Edit score","habit-log":"Habit Log"},actions:{save:"Save",cancel:"Cancel",remove:"Remove",addHabit:"Habit"},log:{habit:"Habit",date:"Date",score:"Score"},settings:{locale:"Locale"}},ru:{titles:{main:"Привычки",menu:"Меню","habit-add":"Новая привычка",settings:"Настройки","habit-increment":"Добавить оценку","increment-edit":"Редактировать оценку","habit-log":"Журнал привычек"},actions:{save:"Сохранить",cancel:"Отмена",remove:"Удалить",addHabit:"Привычка"},log:{habit:"Привычка",date:"Дата",score:"Счет"},settings:{locale:"Язык"}}}},function(t,e,a){"use strict";var n=a(10),i=a.n(n),o=a(33),s=a.n(o),d=a(3),c=a(5),r=a(24);d.default.use(c.a);var l=function(){return parseInt(1e10*Math.random())},u={habits:{},log:[],locale:"ru"},m={incrementLog:function(t,e){t.log=t.log.concat(e)},updateHabit:function(t,e){t.habits||(t.habits={}),t.habits[e.id]=e},removeHabit:function(t,e){var a=s()(t.habits).reduce(function(a,n){var i=t.habits[n];return i.id===parseInt(e)?a:(a[i.id]=i,a)},{});t.log=t.log.filter(function(t){return t.habitId!==e}),t.habits=a},updateLogItem:function(t,e){t.log=t.log.map(function(t){return t.id===e.id?e:t})},removeLogItem:function(t,e){t.log=t.log.filter(function(t){return t.id!==e})},restoreState:function(t,e){t.habits=e.habits,t.log=e.log,t.locale=e.locale,setTimeout(function(){window.i18n.locale=e.locale||"ru"},200)},localeSet:function(t,e){t.locale=e,window.i18n.locale=e}},v={incrementLog:function(t,e){var a=t.commit;t.state;a("incrementLog",i()({id:l()},e))},updateHabit:function(t,e){var a=t.commit;t.state;a("updateHabit",i()({id:l()},e))},removeHabit:function(t,e){var a=t.commit;t.state;a("removeHabit",e)},updateLogItem:function(t,e){(0,t.commit)("updateLogItem",e)},removeLogItem:function(t,e){(0,t.commit)("removeLogItem",e)},localeSet:function(t,e){(0,t.commit)("localeSet",e)}};e.a=new c.a.Store({state:u,actions:v,mutations:m,plugins:[r.a]})},,function(t,e,a){function n(t){a(62)}var i=a(1)(a(25),a(75),n,null,null);t.exports=i.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),i=a(20),o=a(5),s=a(22),d=a.n(s),c=a(21),r=a.n(c),l=a(0),u=a(19),m=a(18);n.default.use(o.a),n.default.use(d.a),n.default.use(i.a);var v=new i.a({locale:"ru",messages:m.a});window.i18n=v,n.default.config.productionTip=!1,new n.default({el:"#app",router:l.a,store:u.a,i18n:v,template:"<App/>",components:{App:r.a}})},function(t,e,a){"use strict";var n=a(32),i=a.n(n),o=function(t){var e=JSON.parse(localStorage.getItem("habitologyState")||'{"habits":{}, "log": []}');e&&t.commit("restoreState",e),t.subscribe(function(){localStorage.setItem("habitologyState",i()(t.state,null,4))})};e.a=o},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0);e.default={name:"app",methods:{gotoMain:function(t){this.$refs.leftSidenav.close(),n.a.push({name:t})},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},newHabit:function(){Notification.requestPermission(function(t){"granted"===t&&setTimeout(function(){new Notification("Hi there!")},5e3)}),n.a.push({name:"habit-add"})},goBack:function(){n.a.back()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0);e.default={name:"habit-add",data:function(){return{name:"Default name",goal:100,id:null}},mounted:function(){if(this.$route.query.habitId){var t=this.$store.state.habits[this.$route.query.habitId];t&&(this.$set(this,"goal",t.goal),this.$set(this,"id",t.id),this.$set(this,"name",t.name))}},methods:{cancel:function(){n.a.push({name:"main"})},update:function(){var t={goal:this.goal,name:this.name};this.id&&(t.id=this.id),this.$store.dispatch("updateHabit",t),n.a.push({name:"main"})},remove:function(){this.$store.dispatch("removeHabit",this.id),n.a.push({name:"main"})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(10),i=a.n(n),o=a(0),s=a(5),d=a(9),c=a.n(d),r=a.i(s.b)(["incrementLog"]);e.default={name:"habitIncrement",data:function(){return{date:c.a.format(new Date,"YYYY-MM-DD"),amount:null,habitId:this.$route.params.habitId}},methods:i()(r,{update:function(){var t={date:new Date(this.date),amount:parseInt(this.amount||0),habitId:parseInt(this.habitId)};this.incrementLog(t),window.navigator&&window.navigator.vibrate(100,50),o.a.push({name:"main"})},formatDate:function(t){return c.a.format(t,"DD.MM.YY")},cancel:function(){o.a.push({name:"main"})},showHabitName:function(t){return this.$store.state.habits[t].name}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(9),i=a.n(n),o=a(0);e.default={name:"habit-log",data:function(){return{}},computed:{filtered:function(){var t=this.$route.query.habitId;return void 0===t||null===t?this.$store.state.log:this.$store.state.log.filter(function(e){var a=e.habitId;return t===a})}},methods:{formatDate:function(t){return i.a.format(new Date(t),"DD.MM.YY")},getHabitName:function(t){var e=this.$store.state.habits[t];return e?e.name:""},editHabitIncrement:function(t){o.a.push({name:"increment-edit",query:{logId:t}})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=a(9),o=a.n(i);e.default={name:"increment-edit",data:function(){return{amount:0,date:100,habitId:null,id:null}},mounted:function(){var t=this,e=this.$store.state.log.find(function(e){return e.id===parseInt(t.$route.query.logId)});e&&(this.$set(this,"amount",e.amount),this.$set(this,"id",e.id),this.$set(this,"date",o.a.format(new Date(e.date),"YYYY-MM-DD")),this.$set(this,"habitId",e.habitId))},methods:{cancel:function(){n.a.back()},update:function(){var t={amount:this.amount,id:this.id,date:this.date,habitId:this.habitId};this.$store.dispatch("updateLogItem",t),n.a.back()},remove:function(){this.$store.dispatch("removeLogItem",this.id),n.a.back()},showHabitName:function(t){return t?this.$store.state.habits[t].name:"-"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0);e.default={name:"main",data:function(){return{}},methods:{newHabit:function(){n.a.push({name:"habit-add"})},countHabit:function(t){return this.$store.state.log.reduce(function(e,a){return a.habitId===t?e+a.amount:e},0)},countPercent:function(t,e){return Math.ceil(100*t/e)},habitIncrement:function(t){n.a.push({name:"habit-increment",params:{habitId:t}})},editHabit:function(t){n.a.push({name:"habit-add",query:{habitId:t}})},getHabitLog:function(t){n.a.push({name:"habit-log",query:{habitId:t}})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"settings",data:function(){return{locale:this.$store.state.locale}},methods:{handleChange:function(){this.$store.dispatch("localeSet",this.locale)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){function n(t){a(63)}var i=a(1)(a(26),a(76),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(66)}var i=a(1)(a(27),a(79),n,"data-v-3bf7b098",null);t.exports=i.exports},function(t,e,a){function n(t){a(67)}var i=a(1)(a(28),a(80),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(65)}var i=a(1)(a(29),a(78),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(68)}var i=a(1)(a(30),a(81),n,"data-v-fc58b594",null);t.exports=i.exports},function(t,e,a){function n(t){a(64)}var i=a(1)(a(31),a(77),n,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",attrs:{"md-swipeable":""}},[a("md-toolbar",{staticClass:"md-small"},[a("div",{staticClass:"md-toolbar-container"},[a("h3",{staticClass:"md-title"},[t._v(t._s(t.$t("titles.menu")))])])]),t._v(" "),a("md-list",[a("md-list-item",{staticClass:"md-primary",on:{click:function(e){t.gotoMain("habit-add")}}},[a("md-icon",[t._v("add")]),t._v(" "),a("span",[t._v(t._s(t.$t("actions.addHabit")))])],1),t._v(" "),a("md-list-item",{staticClass:"md-primary",on:{click:function(e){t.gotoMain("habit-log")}}},[a("md-icon",[t._v("history")]),t._v(" "),a("span",[t._v(t._s(t.$t("titles.habit-log")))])],1),t._v(" "),a("md-list-item",{staticClass:"md-primary",on:{click:function(e){t.gotoMain("settings")}}},[a("md-icon",[t._v("settings")]),t._v(" "),a("span",[t._v(t._s(t.$t("titles.settings")))])],1)],1)],1),t._v(" "),a("md-toolbar",["main"===t.$route.name?a("md-button",{staticClass:"md-icon-button",on:{click:t.toggleLeftSidenav}},[a("md-icon",[t._v("menu")])],1):t._e(),t._v(" "),"main"!==t.$route.name?a("md-button",{staticClass:"md-icon-button",on:{click:t.goBack}},[a("md-icon",[t._v("arrow_back")])],1):t._e(),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v(t._s(t.$t("titles."+t.$route.name)))]),t._v(" "),a("md-menu",{attrs:{"md-size":"4"}},[a("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[a("md-icon",[t._v("more_vert")])],1),t._v(" "),a("md-menu-content",[a("md-menu-item",{on:{click:t.newHabit}},[a("md-icon",[t._v("add")]),t._v(" "),a("span",[t._v(t._s(t.$t("actions.addHabit")))])],1)],1)],1)],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"hidden"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("md-input-container",[a("label",[t._v("Name")]),t._v(" "),a("md-input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),t._v(" "),a("md-list-item",[a("md-input-container",[a("label",[t._v("Goal")]),t._v(" "),a("md-input",{attrs:{type:"number"},model:{value:t.goal,callback:function(e){t.goal=e},expression:"goal"}})],1)],1),t._v(" "),a("md-list-item",[a("md-button",{staticClass:"md-raised md-primary",on:{click:t.update}},[t._v(t._s(t.$t("actions.save")))])],1)],1),t._v(" "),t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("md-input-container",[a("label",{attrs:{for:"locale"}},[t._v(t._s(t.$t("settings.locale")))]),t._v(" "),a("md-select",{attrs:{name:"locale",id:"locale"},on:{change:t.handleChange},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}},[a("md-option",{attrs:{value:"ru"}},[t._v("Русский")]),t._v(" "),a("md-option",{attrs:{value:"en"}},[t._v("English")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"hidden"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.habitId,expression:"habitId"}],attrs:{type:"hidden"},domProps:{value:t.habitId},on:{input:function(e){e.target.composing||(t.habitId=e.target.value)}}}),t._v(" "),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("span",{staticClass:"md-subheading"},[t._v(t._s(t.showHabitName(t.habitId)))])]),t._v(" "),a("md-list-item",[a("md-input-container",[a("md-icon",[t._v("event")]),t._v(" "),a("label",[t._v("Date")]),t._v(" "),a("md-input",{attrs:{type:"date"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),a("md-list-item",[a("md-input-container",[a("md-icon",[t._v("star")]),t._v(" "),a("label",[t._v("Rating")]),t._v(" "),a("md-input",{attrs:{type:"number"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)],1),t._v(" "),a("md-list-item",[a("md-button",{staticClass:"md-raised md-primary",on:{click:t.update}},[t._v(t._s(t.$t("actions.save")))]),t._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:t.remove}},[t._v(t._s(t.$t("actions.remove")))])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.habitId,expression:"habitId"}],attrs:{type:"hidden"},domProps:{value:t.habitId},on:{input:function(e){e.target.composing||(t.habitId=e.target.value)}}}),t._v(" "),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("span",{staticClass:"md-subheading"},[t._v(t._s(t.showHabitName(t.habitId)))])]),t._v(" "),a("md-list-item",[a("md-input-container",[a("md-icon",[t._v("event")]),t._v(" "),a("label",[t._v("Date")]),t._v(" "),a("md-input",{attrs:{type:"date"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),a("md-list-item",[a("md-input-container",[a("md-icon",[t._v("star")]),t._v(" "),a("label",[t._v("Rating")]),t._v(" "),a("md-input",{attrs:{type:"number"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)],1),t._v(" "),a("md-list-item",[a("md-button",{staticClass:"md-raised md-primary",on:{click:t.update}},[t._v(t._s(t.$t("actions.save")))])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[t.filtered.length?t._e():a("div",[t._v("\n    No data\n  ")]),t._v(" "),t.filtered.length?a("md-table",[a("md-table-header",[a("md-table-row",[a("md-table-head",[t._v(t._s(t.$t("log.habit")))]),t._v(" "),a("md-table-head",[t._v(t._s(t.$t("log.date")))]),t._v(" "),a("md-table-head",{attrs:{"md-numeric":""}},[t._v(t._s(t.$t("log.score")))])],1)],1),t._v(" "),a("md-table-body",t._l(t.filtered,function(e,n){return a("md-table-row",{key:n},[a("md-table-cell",[t._v(t._s(t.getHabitName(e.habitId)))]),t._v(" "),a("md-table-cell",[t._v(t._s(t.formatDate(e.date)))]),t._v(" "),a("md-table-cell",[a("a",{on:{click:function(a){t.editHabitIncrement(e.id)}}},[t._v(t._s(e.amount))])])],1)}))],1):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[t._l(t.$store.state.habits,function(e){return a("md-card",{key:e.id},[a("md-card-header",[a("div",{staticClass:"md-title",on:{click:function(a){t.getHabitLog(e.id)}}},[t._v("\n          "+t._s(e.name)+"\n      ")]),t._v(" "),a("div",{staticClass:"md-subhead"},[t._v(t._s(t.countHabit(e.id))+" ("+t._s(t.countPercent(t.countHabit(e.id),e.goal))+"%)")])]),t._v(" "),a("md-card-actions",[a("md-button",{staticClass:"md-icon-button md-list-action",on:{click:function(a){t.editHabit(e.id)}}},[a("md-icon",{staticClass:"md-primary"},[t._v("create")])],1),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action",on:{click:function(a){t.habitIncrement(e.id)}}},[a("md-icon",{staticClass:"md-primary"},[t._v("note_add")])],1)],1),t._v(" "),a("md-progress",{attrs:{"md-progress":t.countPercent(t.countHabit(e.id),e.goal)}})],1)}),t._v(" "),t._e()],2)},staticRenderFns:[]}}],[23]);
//# sourceMappingURL=app.d9cdcd88eb424eca297e.js.map