<template>
  <div id="app">
    <router-view></router-view>
    <md-bottom-bar>
      <md-bottom-bar-item @click="gotoMain('main')" md-icon="home" :md-active="$route.name === 'main'">Home</md-bottom-bar-item>
      <md-bottom-bar-item @click="gotoMain('habit-log')" md-icon="history" :md-active="$route.name === 'habit-log'">Log</md-bottom-bar-item>
      <md-bottom-bar-item @click="gotoMain('settings')" md-icon="settings" :md-active="$route.name === 'settings'">Settings</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from './router';

export default {
    name: 'app',
    computed: mapGetters([
        'evenOrOdd'
    ]),
    methods: {
        gotoMain(name) {
            router.push({ name });
        }
    }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body, #app {
  height: 100%;
  overflow: hidden;
}
.md-fixed {
  position: fixed;
  bottom: 0;
}
</style>
