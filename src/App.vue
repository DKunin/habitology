<template>
  <div class="app">
    
    <md-sidenav md-swipeable class="md-left" ref="leftSidenav">
      <md-toolbar class="md-small">
        <div class="md-toolbar-container">
          <h3 class="md-title"><Logo /></h3>
        </div>
      </md-toolbar>

        <md-list>
          <md-list-item @click="gotoMain('habit-add')" class="md-primary">
            <md-icon>add</md-icon> <span>{{ $t('actions.addHabit') }}</span>
          </md-list-item>

          <md-list-item @click="gotoMain('habit-log')" class="md-primary">
            <md-icon>history</md-icon> <span>{{ $t('titles.habit-log') }}</span>
          </md-list-item>

          <md-list-item @click="gotoMain('settings')" class="md-primary">
            <md-icon>settings</md-icon> <span>{{ $t('titles.settings') }}</span>
          </md-list-item>

        </md-list>
    </md-sidenav>

    <md-toolbar>
      <md-button @click="toggleLeftSidenav" v-if="$route.name === 'main'" class="md-icon-button">
        <md-icon >menu</md-icon>
      </md-button>
      <md-button @click="goBack" v-if="$route.name !== 'main'" class="md-icon-button">
        <md-icon >arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">{{ $t(`titles.${$route.name}`) }}</h2>
      <md-button v-if="$store.state.user.uid" class="md-icon-button" @click="syncWithCloud">
        <md-icon>{{ $store.state.syncingState }}</md-icon>
      </md-button>
      
      <md-menu md-size="4" v-if="false">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item @click="newHabit">
            <md-icon>add</md-icon>
            <span>{{ $t('actions.addHabit') }}</span>
          </md-menu-item>
        </md-menu-content>
      </md-menu>

    </md-toolbar>

    <router-view></router-view>

  </div>
</template>

<script>
import router from './router';
import Logo from '@/components/Logo';

export default {
    name: 'app',
    components: {
        Logo
    },
    methods: {
        gotoMain(name) {
            this.$refs.leftSidenav.close();
            router.push({ name });
        },
        toggleLeftSidenav() {
            this.$refs.leftSidenav.toggle();
        },
        newHabit() {
            // Notification.requestPermission(function(permission) {
            //     if (permission === 'granted') {
            //         setTimeout(() => {
            //             new Notification('Hi there!');
            //         }, 5000);
            //     }
            // });

            router.push({ name: 'habit-add' });
        },
        goBack() {
            router.back();
        },
        syncWithCloud() {
            this.$store.dispatch('syncWithCloud');
        }
    }
};
</script>

<style>
.page {
    background-color: #eeeeee;
}
.app, body, html {
    height: 100%;
    overflow: hidden;
}

.app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
}

.page {
    overflow: auto;
    height: 90%;
}

.md-toolbar .md-title,
.md-toolbar .md-button
{
    text-shadow: 1px 1px 0 rgba(0,0,0, .3);
}
 
.center.md-list-item > .md-list-item-container {
    justify-content: center;
}
.no-data-screen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: .3;
    z-index: 1;
}
.no-data-screen div {
    max-width: 60%;
    text-align: center;
}
.md-toolbar {
    z-index: 2;
}
.colored .no-data-screen {
    color: #78909C;
}
.md-list-item-container .md-button {
    margin: 0;
}
</style>
