webpackJsonp([1],{10:function(t,e,a){"use strict";var n=a(21),i=a(313),s=a(303),o=a.n(s),r=a(299),l=a.n(r),u=a(300),c=a.n(u),d=a(298),m=a.n(d),v=a(304),p=a.n(v),b=a(301),f=a.n(b);n.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"main",component:o.a},{path:"/habit-increment/:habitId",name:"habit-increment",component:l.a},{path:"/habit-log",name:"habit-log",component:c.a},{path:"/habit-add",name:"habit-add",component:m.a},{path:"/settings",name:"settings",component:p.a},{path:"/increment-edit",name:"increment-edit",component:f.a}]})},194:function(t,e){t.exports={name:"habitology",version:"1.1.5",description:"Simple app to work on habits",author:"Dmitri Kunin <whitemarten@gmail.com>",scripts:{dev:"node build/dev-server.js",start:"node build/dev-server.js",build:"node build/build.js",pretty:"find ./src | grep .vue | while read i; do ./bin/pretty $i; done",csscomb:"find ./src | grep .vue | while read i; do ./bin/comb $i; done",publish:"npm run pretty && npm run lint && npm run build && ./bin/publish",test:"npm run csscomb && npm run pretty && npm run lint",lint:"eslint --ext .js,.vue src"},dependencies:{"deep-diff":"0.3.8",deepmerge:"1.5.1",firebase:"4.3.1","gh-pages":"1.0.0",moment:"2.18.1",vue:"^2.3.3","vue-i18n":"7.2.0","vue-material":"0.7.4","vue-router":"^2.3.1",vuex:"2.3.1"},devDependencies:{autoprefixer:"^7.1.2","babel-core":"^6.22.1","babel-eslint":"^7.1.1","babel-loader":"^7.1.1","babel-plugin-transform-runtime":"^6.22.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",chalk:"^2.0.1","connect-history-api-fallback":"^1.3.0","copy-webpack-plugin":"^4.0.1","css-loader":"^0.28.0",csscomb:"4.2.0",cssnano:"^3.10.0",eslint:"^3.19.0","eslint-config-standard":"^6.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.7.1","eslint-plugin-html":"^3.1.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-standard":"^2.0.1","eventsource-polyfill":"^0.9.6",express:"^4.14.1","extract-text-webpack-plugin":"^2.0.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.1.3","html-script-hook":"1.0.0","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.3",opn:"^5.1.0","optimize-css-assets-webpack-plugin":"^2.0.0",ora:"^1.2.0",prettier:"1.7.0",rimraf:"^2.6.0",semver:"^5.3.0",shelljs:"^0.7.6","sw-precache-webpack-plugin":"^0.11.4","uglify-es":"^3.0.25","url-loader":"^0.5.8","vue-loader":"^12.1.0","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.3.3",webpack:"^2.6.1","webpack-bundle-analyzer":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-hot-middleware":"^2.18.0","webpack-merge":"^4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},195:function(t,e,a){"use strict";e.a={en:{titles:{main:"Habits",menu:"Menu","habit-add":"New Habit",settings:"Settings","habit-increment":"Add habit score","increment-edit":"Edit score","habit-log":"Habit Log",name:"Name",date:"Date",rating:"Rating",goal:"Goal","continuing-goal":"Have you already started this habit?","initial-value":"Initial value",nodata:"no data",defaultHabitName:"Habit"},actions:{save:"Save",cancel:"Cancel",remove:"Remove",addHabit:"Habit"},log:{habit:"Habit",date:"Date",score:"Score"},settings:{locale:"Locale",login:"Log in",logout:"Log out",signup:"Sign Up",save:"Save",email:"email",password:"password"},text:{nolog:"Add rating to a habit and it'll appear right here.",nohabits:"Add new habit and it'll appear here."},serverErrorMessages:{noerror:"","user-not-found":"User not found","invalid-email":"Email is badly formatted","wrong-password":"User not found, maybe you should register"}},ru:{titles:{main:"Привычки",menu:"Меню","habit-add":"Новая привычка",settings:"Настройки","habit-increment":"Добавить оценку","increment-edit":"Редактировать оценку","habit-log":"Журнал привычек",name:"Название",date:"Дата",rating:"Оценка",goal:"Цель","continuing-goal":"Это уже начатая привычка?","initial-value":"Первоначальное значение",nodata:"нет данных",defaultHabitName:"Название привычки"},actions:{save:"Сохранить",cancel:"Отмена",remove:"Удалить",addHabit:"Привычка"},log:{habit:"Привычка",date:"Дата",score:"Счет"},settings:{locale:"Язык",login:"Войти",logout:"Выйти",signup:"Регистрация",save:"Сохранить",email:"email",password:"пароль"},text:{nolog:"Добавьте оценку к привычке и она появится здесь",nohabits:"Добавьте новую привычку и она появится здесь"},serverErrorMessages:{noerror:"","user-not-found":"Пользователь не найден","invalid-email":"Email неверный или некорректно сформирован","wrong-password":"Неверный пароль"}}}},196:function(t,e,a){"use strict";var n=a(43),i=a.n(n),s=a(42),o=a.n(s),r=a(211),l=a.n(r),u=a(21),c=a(31),d=a(202),m=a(18),v=a.n(m),p=a(252),b=(a.n(p),a(253)),f=(a.n(b),a(240)),h=a.n(f),g=a(200);u.default.use(c.a);var _=function(){return parseInt(1e10*Math.random())},j={apiKey:"AIzaSyD8-mtgEl3_PrD9mZe2iwPARtRDLen7nu4",authDomain:"habitology-ffa70.firebaseapp.com",databaseURL:"https://habitology-ffa70.firebaseio.com",projectId:"habitology-ffa70",storageBucket:"habitology-ffa70.appspot.com",messagingSenderId:"127457719546"},y={syncingState:g.a,habits:{},log:[],user:{},locale:"ru"},k={incrementLog:function(t,e){t.log=t.log.concat(e),t.syncingState=g.b},updateHabit:function(t,e){t.habits||(t.habits={}),t.habits[e.id]=e,t.syncingState=g.b},removeHabit:function(t,e){t.habits=l()(t.habits).reduce(function(a,n){var i=t.habits[n];return i.id===parseInt(e)&&(a[i.id]=i,a[i.id].destroy=!0),a[i.id]=i,a},{}),t.log=t.log.reduce(function(t,a){return parseInt(a.habitId)===parseInt(e)&&(a.destroy=!0),t.concat(a)},[]),t.syncingState=g.b},updateLogItem:function(t,e){t.log=t.log.map(function(t){return t.id===e.id?e:t}),t.syncingState=g.b},removeLogItem:function(t,e){t.log=t.log.reduce(function(t,a){return parseInt(a.id)===parseInt(e)&&(a.destroy=!0),t.concat(a)},[])},restoreState:function(t,e){t.habits=e.habits,t.log=e.log,t.user=e.user,t.locale=e.locale,v.a.initializeApp(j),window.firebase=v.a,setTimeout(function(){window.i18n.locale=e.locale||"ru"},200)},localeSet:function(t,e){t.locale=e,window.i18n.locale=e},getUser:function(t,e){t.user={email:e.email,uid:e.uid}},setUser:function(t,e){t.user=e},logOut:function(t){t.user={},t.habits={},t.log=[],t.syncingState=g.b},saveSettings:function(t,e){t.locale=e.locale},syncWithCloud:function(t){if(v.a&&t.user&&t.user.uid){if(!window.navigator.onLine)return void(t.syncingState=g.c);t.syncingState=g.d;var e="users/"+t.user.uid;v.a.database().ref(e).once("value").then(function(e){var a=t.habits,n=t.log,i={habits:a,log:n},s=e.val()||{},r={};r.habits=h()(s.habits||{},i.habits),r.log=h()(s.log||[],i.log||[]);var u=l()(r.habits).reduce(function(t,e){return r.habits[e].destroy?t:(t[e]=r.habits[e],t)},{}),c=r.log.filter(function(t){return!t.destroy},{});v.a.database().ref("users/"+t.user.uid).update({habits:u,log:c}),t.habits=r.habits,t.log=c,t.syncingState=g.a,localStorage.setItem("habitologyState",o()({log:c,habits:r.habits,user:t.user},null,4))})}}},w={incrementLog:function(t,e){var a=t.commit;t.state;a("incrementLog",i()({id:_()},e))},updateHabit:function(t,e){var a=t.commit;t.state;a("updateHabit",i()({id:_()},e))},removeHabit:function(t,e){var a=t.commit;t.state;a("removeHabit",e)},updateLogItem:function(t,e){(0,t.commit)("updateLogItem",e)},removeLogItem:function(t,e){(0,t.commit)("removeLogItem",e)},localeSet:function(t,e){(0,t.commit)("localeSet",e)},getUser:function(t,e){(0,t.commit)("getUser",e)},logOut:function(t){(0,t.commit)("logOut")},logIn:function(t,e){(0,t.commit)("getUser",e)},saveSettings:function(t,e){(0,t.commit)("saveSettings",e)},syncWithCloud:function(t){(0,t.commit)("syncWithCloud")}},$=new c.a.Store({state:y,actions:w,mutations:k,plugins:[d.a]});e.a=$},198:function(t,e,a){function n(t){a(241)}var i=a(9)(a(203),a(305),n,null,null);t.exports=i.exports},200:function(t,e,a){"use strict";a.d(e,"d",function(){return n}),a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s}),a.d(e,"c",function(){return o});var n="cloud_upload",i="cloud_queue",s="cloud",o="cloud_off"},201:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(21),i=a(197),s=a(31),o=a(199),r=a.n(o),l=a(198),u=a.n(l),c=a(10),d=a(196),m=a(195);n.default.use(s.a),n.default.use(r.a),n.default.use(i.a),n.default.material.registerTheme("default",{primary:{color:"grey",hue:900},accent:{color:"blue-grey",hue:300},warn:{color:"red",hue:600},background:{color:"grey",hue:200}});var v=new i.a({locale:"ru",messages:m.a});window.i18n=v,n.default.config.productionTip=!1,new n.default({el:"#app",router:c.a,store:d.a,i18n:v,template:"<App/>",components:{App:u.a}})},202:function(t,e,a){"use strict";var n=a(42),i=a.n(n),s=["incrementLog","updateHabit","removeHabit","updateLogItem","removeLogItem","restoreState","saveSettings","logIn","logOut","getUser"],o=function(t){var e=void 0,a=JSON.parse(localStorage.getItem("habitologyState")||'{"habits":{}, "log": [], "user": {}, "apiKey": "", "locale": "en"}');a&&t.commit("restoreState",a),t.subscribe(function(a){console.log(a.type),s.includes(a.type)&&(clearTimeout(e),e=setTimeout(function(){t.commit("syncWithCloud")},3e3),localStorage.setItem("habitologyState",i()(t.state,null,4)))})};e.a=o},203:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(10),i=a(302),s=a.n(i),o=a(194),r=a.n(o);e.default={name:"app",components:{Logo:s.a},data:function(){return{version:r.a.version}},mounted:function(){},methods:{gotoMain:function(t){this.$refs.leftSidenav.close(),n.a.push({name:t})},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},newHabit:function(){n.a.push({name:"habit-add"})},goBack:function(){n.a.back()},syncWithCloud:function(){this.$store.dispatch("syncWithCloud")}}}},204:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(10);e.default={name:"habit-add",data:function(){return{name:"",goal:1e3,id:null,initialValue:0,continuingGoal:!1}},mounted:function(){if(this.$route.query.habitId){var t=this.$store.state.habits[this.$route.query.habitId];t&&(this.$set(this,"goal",t.goal),this.$set(this,"id",t.id),this.$set(this,"name",t.name),this.$set(this,"initialValue",t.initialValue))}},methods:{cancel:function(){n.a.push({name:"main"})},update:function(){var t={goal:this.goal,name:this.name,initialValue:this.initialValue};this.id&&(t.id=this.id),this.$store.dispatch("updateHabit",t),n.a.push({name:"main"})},remove:function(){this.$store.dispatch("removeHabit",this.id),n.a.push({name:"main"})}}}},205:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(43),i=a.n(n),s=a(10),o=a(31),r=a(0),l=a.n(r),u=a.i(o.b)(["incrementLog"]);e.default={name:"habitIncrement",data:function(){return{date:l()().format("YYYY-MM-DD"),amount:null,habitId:this.$route.params.habitId}},methods:i()(u,{update:function(){var t=new Date(this.date);t.setHours((new Date).getHours()),t.setMinutes((new Date).getMinutes());var e={date:t,amount:parseInt(this.amount||0),habitId:parseInt(this.habitId)};this.incrementLog(e),window.navigator&&window.navigator.vibrate(100,50),s.a.push({name:"main"})},formatDate:function(t){return l()(t).format("DD.MM.YY")},cancel:function(){s.a.push({name:"main"})},showHabitName:function(t){return this.$store.state.habits[t].name}})}},206:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=a.n(n),s=a(10);e.default={name:"habit-log",data:function(){return{}},computed:{filtered:function(){var t=this.$route.query.habitId;return void 0===t||null===t?this.$store.state.log.filter(function(t){return!t.destroy}):(t=parseInt(t),this.$store.state.log.filter(function(t){return!t.destroy}).filter(function(e){var a=e.habitId;return t===a}).sort(function(t,e){return new Date(e.date)-new Date(t.date)}))}},mounted:function(){i.a.locale(this.$store.state.locale||"ru")},methods:{formatDate:function(t){return i()(new Date(t)).calendar()},getHabitName:function(t){var e=this.$store.state.habits[t];return e?e.name:""},editHabitIncrement:function(t){s.a.push({name:"increment-edit",query:{logId:t}})},addHabitIncrement:function(t){s.a.push({name:"habit-increment",params:{habitId:t}})}}}},207:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(10),i=a(0),s=a.n(i);e.default={name:"increment-edit",data:function(){return{amount:0,date:100,habitId:null,id:null}},mounted:function(){var t=this,e=this.$store.state.log.find(function(e){return e.id===parseInt(t.$route.query.logId)});e&&(this.$set(this,"amount",e.amount),this.$set(this,"id",e.id),this.$set(this,"date",s()(new Date(e.date)).format("YYYY-MM-DD")),this.$set(this,"habitId",e.habitId))},methods:{cancel:function(){n.a.back()},update:function(){var t={amount:this.amount,id:this.id,date:this.date,habitId:this.habitId};this.$store.dispatch("updateLogItem",t),n.a.back()},remove:function(){this.$store.dispatch("removeLogItem",this.id),n.a.back()},showHabitName:function(t){return t?this.$store.state.habits[t].name:"-"}}}},208:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"logo"}},209:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(10);e.default={name:"main",data:function(){return{}},methods:{newHabit:function(){n.a.push({name:"habit-add"})},countHabit:function(t){return this.$store.state.log.reduce(function(e,a){return a.habitId!==t.id||a.destroy?e:e+parseInt(a.amount)},parseInt(t.initialValue)||0)},countPercent:function(t,e){return Math.ceil(100*t/e)},habitIncrement:function(t){n.a.push({name:"habit-increment",params:{habitId:t}})},editHabit:function(t){n.a.push({name:"habit-add",query:{habitId:t}})},getHabitLog:function(t){n.a.push({name:"habit-log",query:{habitId:t}})}}}},210:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(194),i=a.n(n);e.default={name:"settings",data:function(){return{locale:this.$store.state.locale,email:"",password:"",errorCode:"noerror",version:i.a.version}},mounted:function(){console.log(this.$store.state.user)},methods:{signIn:function(){var t=this;window.firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.$store.dispatch("logIn",e)}).catch(function(e){t.$set(t,"errorCode",e.code.replace("auth/","")),t.$refs.snackbar.open()})},logOut:function(){var t=this;window.firebase.auth().signOut().then(function(){t.$store.dispatch("logOut")})},signUp:function(){window.firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){console.log("signUp",t)}).catch(function(t){console.log(t,t.message)})},saveSettings:function(){this.$store.dispatch("saveSettings",{locale:this.locale}),setTimeout(function(){window.location.reload()},1e3)}}}},241:function(t,e){},242:function(t,e){},243:function(t,e){},244:function(t,e){},245:function(t,e){},246:function(t,e){},247:function(t,e){},248:function(t,e){},295:function(t,e,a){function n(t){return a(i(t))}function i(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var s={"./af":78,"./af.js":78,"./ar":85,"./ar-dz":79,"./ar-dz.js":79,"./ar-kw":80,"./ar-kw.js":80,"./ar-ly":81,"./ar-ly.js":81,"./ar-ma":82,"./ar-ma.js":82,"./ar-sa":83,"./ar-sa.js":83,"./ar-tn":84,"./ar-tn.js":84,"./ar.js":85,"./az":86,"./az.js":86,"./be":87,"./be.js":87,"./bg":88,"./bg.js":88,"./bn":89,"./bn.js":89,"./bo":90,"./bo.js":90,"./br":91,"./br.js":91,"./bs":92,"./bs.js":92,"./ca":93,"./ca.js":93,"./cs":94,"./cs.js":94,"./cv":95,"./cv.js":95,"./cy":96,"./cy.js":96,"./da":97,"./da.js":97,"./de":100,"./de-at":98,"./de-at.js":98,"./de-ch":99,"./de-ch.js":99,"./de.js":100,"./dv":101,"./dv.js":101,"./el":102,"./el.js":102,"./en-au":103,"./en-au.js":103,"./en-ca":104,"./en-ca.js":104,"./en-gb":105,"./en-gb.js":105,"./en-ie":106,"./en-ie.js":106,"./en-nz":107,"./en-nz.js":107,"./eo":108,"./eo.js":108,"./es":110,"./es-do":109,"./es-do.js":109,"./es.js":110,"./et":111,"./et.js":111,"./eu":112,"./eu.js":112,"./fa":113,"./fa.js":113,"./fi":114,"./fi.js":114,"./fo":115,"./fo.js":115,"./fr":118,"./fr-ca":116,"./fr-ca.js":116,"./fr-ch":117,"./fr-ch.js":117,"./fr.js":118,"./fy":119,"./fy.js":119,"./gd":120,"./gd.js":120,"./gl":121,"./gl.js":121,"./gom-latn":122,"./gom-latn.js":122,"./he":123,"./he.js":123,"./hi":124,"./hi.js":124,"./hr":125,"./hr.js":125,"./hu":126,"./hu.js":126,"./hy-am":127,"./hy-am.js":127,"./id":128,"./id.js":128,"./is":129,"./is.js":129,"./it":130,"./it.js":130,"./ja":131,"./ja.js":131,"./jv":132,"./jv.js":132,"./ka":133,"./ka.js":133,"./kk":134,"./kk.js":134,"./km":135,"./km.js":135,"./kn":136,"./kn.js":136,"./ko":137,"./ko.js":137,"./ky":138,"./ky.js":138,"./lb":139,"./lb.js":139,"./lo":140,"./lo.js":140,"./lt":141,"./lt.js":141,"./lv":142,"./lv.js":142,"./me":143,"./me.js":143,"./mi":144,"./mi.js":144,"./mk":145,"./mk.js":145,"./ml":146,"./ml.js":146,"./mr":147,"./mr.js":147,"./ms":149,"./ms-my":148,"./ms-my.js":148,"./ms.js":149,"./my":150,"./my.js":150,"./nb":151,"./nb.js":151,"./ne":152,"./ne.js":152,"./nl":154,"./nl-be":153,"./nl-be.js":153,"./nl.js":154,"./nn":155,"./nn.js":155,"./pa-in":156,"./pa-in.js":156,"./pl":157,"./pl.js":157,"./pt":159,"./pt-br":158,"./pt-br.js":158,"./pt.js":159,"./ro":160,"./ro.js":160,"./ru":161,"./ru.js":161,"./sd":162,"./sd.js":162,"./se":163,"./se.js":163,"./si":164,"./si.js":164,"./sk":165,"./sk.js":165,"./sl":166,"./sl.js":166,"./sq":167,"./sq.js":167,"./sr":169,"./sr-cyrl":168,"./sr-cyrl.js":168,"./sr.js":169,"./ss":170,"./ss.js":170,"./sv":171,"./sv.js":171,"./sw":172,"./sw.js":172,"./ta":173,"./ta.js":173,"./te":174,"./te.js":174,"./tet":175,"./tet.js":175,"./th":176,"./th.js":176,"./tl-ph":177,"./tl-ph.js":177,"./tlh":178,"./tlh.js":178,"./tr":179,"./tr.js":179,"./tzl":180,"./tzl.js":180,"./tzm":182,"./tzm-latn":181,"./tzm-latn.js":181,"./tzm.js":182,"./uk":183,"./uk.js":183,"./ur":184,"./ur.js":184,"./uz":186,"./uz-latn":185,"./uz-latn.js":185,"./uz.js":186,"./vi":187,"./vi.js":187,"./x-pseudo":188,"./x-pseudo.js":188,"./yo":189,"./yo.js":189,"./zh-cn":190,"./zh-cn.js":190,"./zh-hk":191,"./zh-hk.js":191,"./zh-tw":192,"./zh-tw.js":192};n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id=295},298:function(t,e,a){function n(t){a(243)}var i=a(9)(a(204),a(307),n,null,null);t.exports=i.exports},299:function(t,e,a){function n(t){a(246)}var i=a(9)(a(205),a(310),n,"data-v-3bf7b098",null);t.exports=i.exports},300:function(t,e,a){function n(t){a(247)}var i=a(9)(a(206),a(311),n,"data-v-6e63f6ad",null);t.exports=i.exports},301:function(t,e,a){function n(t){a(245)}var i=a(9)(a(207),a(309),n,"data-v-2a816c6c",null);t.exports=i.exports},302:function(t,e,a){function n(t){a(242)}var i=a(9)(a(208),a(306),n,null,null);t.exports=i.exports},303:function(t,e,a){function n(t){a(248)}var i=a(9)(a(209),a(312),n,"data-v-fc58b594",null);t.exports=i.exports},304:function(t,e,a){function n(t){a(244)}var i=a(9)(a(210),a(308),n,"data-v-259cdc20",null);t.exports=i.exports},305:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",attrs:{"md-swipeable":""}},[a("md-toolbar",{staticClass:"md-small"},[a("div",{staticClass:"md-toolbar-container"},[a("h3",{staticClass:"md-title"},[a("Logo")],1)])]),t._v(" "),a("md-list",[a("md-list-item",{staticClass:"md-primary",on:{click:function(e){t.gotoMain("habit-add")}}},[a("md-icon",[t._v("add")]),t._v(" "),a("span",[t._v(t._s(t.$t("actions.addHabit")))])],1),t._v(" "),a("md-list-item",{staticClass:"md-primary",on:{click:function(e){t.gotoMain("habit-log")}}},[a("md-icon",[t._v("history")]),t._v(" "),a("span",[t._v(t._s(t.$t("titles.habit-log")))])],1),t._v(" "),a("md-list-item",{staticClass:"md-primary",on:{click:function(e){t.gotoMain("settings")}}},[a("md-icon",[t._v("settings")]),t._v(" "),a("span",[t._v(t._s(t.$t("titles.settings")))])],1)],1),t._v(" "),a("div",{staticClass:"version"},[t._v(t._s(t.version))])],1),t._v(" "),a("md-toolbar",["main"===t.$route.name?a("md-button",{staticClass:"md-icon-button",on:{click:t.toggleLeftSidenav}},[a("md-icon",[t._v("menu")])],1):t._e(),t._v(" "),"main"!==t.$route.name?a("md-button",{staticClass:"md-icon-button",on:{click:t.goBack}},[a("md-icon",[t._v("arrow_back")])],1):t._e(),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v(t._s(t.$t("titles."+t.$route.name)))]),t._v(" "),t.$store.state.user.uid?a("md-button",{staticClass:"md-icon-button",on:{click:t.syncWithCloud}},[a("md-icon",[t._v(t._s(t.$store.state.syncingState))])],1):t._e(),t._v(" "),t._e()],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},306:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 325 301",xmlns:"http://www.w3.org/2000/svg"}},[a("title",[t._v("Group 2")]),a("g",{attrs:{fill:"#fff","fill-rule":"evenodd"}},[a("path",{attrs:{d:"M151.319 119.035c7.053.713 11.25.45 12.59-.79 2.01-1.86 3.163-13.378 3.163-21.16V34.939c0-12.9-9.438-20.627-9.438-26.472 0-5.846 4.38-8.466 9.747-8.466h78.223c5.367 0 9.686 2.486 9.686 8.331 0 5.846-9.254 13.169-9.254 26.27v62.485c0 17.334 3.825 33.527 11.721 47.166l1.666 2.754 29.488 48.644 30.413 49.047c3.579 6.047 5.614 13.505 5.676 21.231 0 18.813-9.994 35.072-38.988 35.072H127.097c-28.933 0-38.988-16.26-38.988-35.072 0-7.726 2.035-15.251 5.614-21.298l30.351-48.98 16.247-28.605H54.607v97.807c0 12.036-2.574 21.03-7.722 26.982-5.148 5.951-11.767 8.927-19.857 8.927-8.213 0-14.77-3.009-19.674-9.027C2.451 285.716 0 276.756 0 264.852V35.71C0 23.807 2.42 14.88 7.263 8.928 12.104 2.976 18.693 0 27.028 0 35.24 0 41.89 2.943 46.977 8.828c5.086 5.886 7.63 14.847 7.63 26.882v83.325h96.712zm21.248 13.07l-131.906-1.378c0-11.288.582-57.803.582-63.447V34.654c0-7.009-1.481-12.227-4.444-15.655-2.962-3.428-5.399-5.141-10.181-5.141-4.854 0-6.31 1.79-9.13 5.257-2.819 3.466-4.229 8.665-4.229 15.597v229.34c0 6.932 1.428 12.15 4.283 15.655 2.856 3.504 4.293 5.199 9.076 5.199 4.711 0 7.13-1.733 10.128-5.2 2.998-3.465 4.497-8.703 4.497-15.712L40.89 154.4l121.401 1.378h4.1l-40.829 69.458-17.676 28.524c-2.084 3.522-3.27 7.904-3.27 12.404 0 10.956 5.857 20.425 22.707 20.425h158.982c16.885 0 22.706-9.47 22.706-20.425-.036-4.5-1.222-8.843-3.306-12.365l-17.712-28.563-49.845-80.902-.97-1.604c-4.6-7.943-6.827-17.373-6.827-27.468 0 0 .252-77.508.252-85.138 0-7.63 5.64-8.011 5.64-11.415 0-3.405-2.514-4.852-5.64-4.852l-47.597-.36c-3.125 0-5.676 1.526-5.676 4.93 0 3.405 5.245 4.021 5.245 11.534 0 7.512-.251 84.942-.251 84.942 0 2.73-.422 6.275-1.42 10.458-.665 2.79-3.444 5.037-8.337 6.742z"}}),a("path",{attrs:{d:"M118.552 260.689l8.405-14.3 7.694-13.145 26.186-44.633.711-1.228c.194-.289.453-.577.647-.866l.065-.145L170.794 172h70.735l7.565 12.928.064.072c.13.217.324.433.453.65l27.738 47.45 9.763 16.756.646 1.083.324.578 5.43 9.244c.97 1.517 1.488 3.467 1.488 5.489 0 5.417-3.944 9.75-8.729 9.75H125.73c-4.85 0-8.729-4.406-8.729-9.75 0-1.806.388-3.539 1.228-4.983.13-.217.194-.361.324-.578zm130.994-74.967c.065.145.259.434.453.795l-.065-.145c-.194-.289-.323-.578-.388-.65zm-73.32 25.061c.97-1.083 1.487-2.6 1.487-4.116a6.58 6.58 0 0 0-1.487-4.117c-.97-1.083-2.328-1.661-3.621-1.661-1.358 0-2.716.578-3.621 1.661-.97 1.083-1.487 2.6-1.487 4.117a6.58 6.58 0 0 0 1.487 4.116c.97 1.084 2.263 1.661 3.62 1.661 1.294 0 2.652-.65 3.622-1.66zm-23.277 40.95l15.194-25.927c1.552-2.673.906-6.284-1.487-8.017-.905-.65-1.875-.939-2.845-.939-1.68 0-3.297.939-4.202 2.6l-15.195 25.928c-1.551 2.672-.905 6.283 1.488 8.016.905.65 1.875.94 2.78.94 1.616 0 3.297-.94 4.267-2.6z","fill-rule":"nonzero"}})])])},staticRenderFns:[]}},307:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"hidden"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("md-input-container",[a("label",[t._v(t._s(t.$t("titles.name")))]),t._v(" "),a("md-input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),t._v(" "),a("md-list-item",[a("md-input-container",[a("label",[t._v(t._s(t.$t("titles.goal")))]),t._v(" "),a("md-input",{attrs:{type:"number"},model:{value:t.goal,callback:function(e){t.goal=e},expression:"goal"}})],1)],1),t._v(" "),a("md-list-item",[a("md-checkbox",{attrs:{name:"continuingGoal"},model:{value:t.continuingGoal,callback:function(e){t.continuingGoal=e},expression:"continuingGoal"}},[t._v(t._s(t.$t("titles.continuing-goal")))])],1),t._v(" "),t.continuingGoal?a("md-list-item",[a("md-input-container",[a("label",[t._v(t._s(t.$t("titles.initial-value")))]),t._v(" "),a("md-input",{attrs:{type:"number"},model:{value:t.initialValue,callback:function(e){t.initialValue=e},expression:"initialValue"}})],1)],1):t._e(),t._v(" "),a("md-list-item",[t.id?a("md-button",{staticClass:"md-raised md-accent",on:{click:t.remove}},[t._v(t._s(t.$t("actions.remove")))]):t._e(),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",on:{click:t.update}},[t._v(t._s(t.$t("actions.save")))])],1)],1)],1)},staticRenderFns:[]}},308:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("md-list",{staticClass:"md-double-line"},[t.$store.state.user&&t.$store.state.user.email?a("md-list-item",[a("div",[t._v(t._s(t.$store.state.user.email))]),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){t.logOut()}}},[t._v("\n                "+t._s(t.$t("settings.logout"))+"\n            ")])],1):t._e(),t._v(" "),t.$store.state.user.email?t._e():a("md-list-item",[a("md-input-container",[a("label",[t._v(t._s(t.$t("settings.email")))]),t._v(" "),a("md-input",{model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),t.$store.state.user.email?t._e():a("md-list-item",[a("md-input-container",{attrs:{"md-has-password":""}},[a("label",[t._v(t._s(t.$t("settings.password")))]),t._v(" "),a("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),t.$store.state.user.email?t._e():a("md-list-item",[a("md-button",{staticClass:"md-raised",on:{click:function(e){t.signUp()}}},[t._v("\n                "+t._s(t.$t("settings.signup"))+"\n            ")]),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){t.signIn()}}},[t._v("\n                "+t._s(t.$t("settings.login"))+"\n            ")])],1),t._v(" "),a("md-list-item",[a("md-input-container",[a("label",{attrs:{for:"locale"}},[t._v(t._s(t.$t("settings.locale")))]),t._v(" "),a("md-select",{attrs:{name:"locale",id:"locale"},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}},[a("md-option",{attrs:{value:"ru"}},[t._v("Русский")]),t._v(" "),a("md-option",{attrs:{value:"en"}},[t._v("English")])],1)],1)],1),t._v(" "),a("md-list-item",[a("md-button",{staticClass:"md-raised md-primary",attrs:{type:"button"},on:{click:t.saveSettings}},[t._v("\n                "+t._s(t.$t("settings.save"))+"\n            ")])],1)],1),t._v(" "),a("md-snackbar",{ref:"snackbar",attrs:{"md-position":"bottom center","md-duration":4e3}},[a("span",[t._v(t._s(t.$t("serverErrorMessages."+t.errorCode)))]),t._v(" "),a("md-button",{staticClass:"md-accent",attrs:{"md-theme":"default"},on:{click:function(e){t.$refs.snackbar.close()}}},[t._v("Close")])],1),t._v(" "),a("div",{staticClass:"version"},[t._v(t._s(t.version))])],1)},staticRenderFns:[]}},309:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"hidden"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.habitId,expression:"habitId"}],attrs:{type:"hidden"},domProps:{value:t.habitId},on:{input:function(e){e.target.composing||(t.habitId=e.target.value)}}}),t._v(" "),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("span",{staticClass:"md-subheading"},[t._v(t._s(t.showHabitName(t.habitId)))])]),t._v(" "),a("md-list-item",[a("md-input-container",[a("md-icon",[t._v("event")]),t._v(" "),a("label",[t._v("Date")]),t._v(" "),a("md-input",{attrs:{type:"date"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),a("md-list-item",[t._e(),t._v(" "),a("div",{staticClass:"radio-holder"},[a("md-radio",{attrs:{name:"amount","md-value":"1"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("1")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"2"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("2")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"3"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("3")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"4"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("4")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"5"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("5")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"6"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("6")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"7"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("7")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"8"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("8")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"9"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("9")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"10"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("10")])],1)],1),t._v(" "),a("md-list-item",[a("md-button",{staticClass:"md-raised md-accent",on:{click:t.remove}},[t._v(t._s(t.$t("actions.remove")))]),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",on:{click:t.update}},[t._v(t._s(t.$t("actions.save")))])],1)],1)],1)},staticRenderFns:[]}},310:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.habitId,expression:"habitId"}],attrs:{type:"hidden"},domProps:{value:t.habitId},on:{input:function(e){e.target.composing||(t.habitId=e.target.value)}}}),t._v(" "),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("span",{staticClass:"md-subheading"},[t._v(t._s(t.showHabitName(t.habitId)))])]),t._v(" "),a("md-list-item",[a("md-input-container",[a("md-icon",[t._v("event")]),t._v(" "),a("label",[t._v(t._s(t.$t("titles.date")))]),t._v(" "),a("md-input",{attrs:{type:"date"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),a("md-list-item",[t._e(),t._v(" "),a("div",{staticClass:"radio-holder"},[a("md-radio",{attrs:{name:"amount","md-value":"1"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("1")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"2"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("2")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"3"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("3")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"4"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("4")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"5"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("5")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"6"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("6")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"7"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("7")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"8"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("8")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"9"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("9")]),t._v(" "),a("md-radio",{attrs:{name:"amount","md-value":"10"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v("10")])],1)],1),t._v(" "),a("md-list-item",{staticClass:"right"},[a("md-button",{staticClass:"md-raised md-primary",on:{click:t.update}},[t._v(t._s(t.$t("actions.save")))])],1)],1)],1)},staticRenderFns:[]}},311:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[t.filtered.length?t._e():a("div",{staticClass:"no-data-screen"},[a("div",[a("md-icon",{staticClass:"md-size-4x"},[t._v("update")])],1),t._v(" "),a("div",[t._v(t._s(t.$t("text.nolog")))])]),t._v(" "),t.filtered.length?a("md-list",t._l(t.filtered,function(e,n){return a("md-list-item",{key:n},[a("md-avatar",[a("div",{staticClass:"log-item",on:{click:function(a){t.editHabitIncrement(e.id)}}},[t._v(t._s(e.amount))])]),t._v(" "),a("div",{staticClass:"md-list-text-container"},[a("span",[t._v(t._s(t.getHabitName(e.habitId))+" "),a("a",{staticClass:"edit-log",on:{click:function(a){t.editHabitIncrement(e.id)}}},[a("md-icon",{staticClass:"md-primary"},[t._v("create")])],1)]),t._v(" "),a("p",[t._v(t._s(t.formatDate(e.date)))])])],1)})):t._e(),t._v(" "),t.$route.query.habitId?a("md-card",{staticClass:"empty-card"},[a("md-card-content",[a("div",{on:{click:function(e){t.addHabitIncrement(t.$route.query.habitId)}}},[a("md-icon",{staticClass:"md-size-2x"},[t._v("add_circle_outline")])],1)])],1):t._e()],1)},staticRenderFns:[]}},312:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page colored"},[Object.keys(t.$store.state.habits).length?t._e():a("div",{staticClass:"no-data-screen"},[a("div",{on:{click:t.newHabit}},[a("md-icon",{staticClass:"md-size-4x"},[t._v("add_circle_outline")])],1),t._v(" "),a("div",[t._v(t._s(t.$t("text.nohabits")))])]),t._v(" "),t._l(t.$store.state.habits,function(e){return t.$store.state.habits&&!e.destroy?a("md-card",{key:e.id},[a("md-card-header",[a("div",{staticClass:"md-title",on:{click:function(a){t.getHabitLog(e.id)}}},[t._v("\n          "+t._s(e.name)+"\n      ")]),t._v(" "),a("div",{staticClass:"md-subhead"},[t._v("\n          "+t._s(t.countHabit(e))+" ("+t._s(t.countPercent(t.countHabit(e),e.goal))+"%) \n          "),a("a",{on:{click:function(a){t.editHabit(e.id)}}},[a("md-icon",{staticClass:"md-primary"},[t._v("create")])],1)])]),t._v(" "),a("md-card-actions",[a("md-button",{staticClass:"md-icon-button md-list-action",on:{click:function(a){t.habitIncrement(e.id)}}},[a("md-icon",{staticClass:"white-icon"},[t._v("add")])],1)],1),t._v(" "),a("md-progress",{attrs:{"md-progress":t.countPercent(t.countHabit(e),e.goal)}})],1):t._e()}),t._v(" "),Object.keys(t.$store.state.habits).length?a("md-card",{staticClass:"empty-card"},[a("md-card-content",[a("div",{on:{click:t.newHabit}},[a("md-icon",{staticClass:"md-size-2x"},[t._v("add_circle_outline")])],1)])],1):t._e(),t._v(" "),t._e()],2)},staticRenderFns:[]}}},[201]);
//# sourceMappingURL=app.621681920034c11da7b0.js.map