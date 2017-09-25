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

            <div class="separator"></div>

          <md-list-item @click="gotoMain('settings')" class="md-primary">
            <md-icon>settings</md-icon> <span>{{ $t('titles.settings') }}</span>
          </md-list-item>

          <md-list-item @click="gotoMain('about')" class="md-primary">
            <md-icon>help_outline</md-icon> <span>{{ $t('titles.about') }}</span>
          </md-list-item>

        </md-list>
        <div class="version">
            <div>{{ version }}</div>
            <div @click="reloadScreen" v-if="$store.state.newVersion">{{  $t('text.newVersion', { version: $store.state.newVersion }) }}</div>
            
        </div>
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
    <md-dialog-alert
      :md-content="alert.content"
      :md-ok-text="alert.ok"
      ref="alert-dialog">
    </md-dialog-alert>

    <router-view></router-view>
  </div>
</template>

<script>

import router from './router';
import Logo from '@/components/Logo';
import packageJson from '../package.json';

export default {
    name: 'app',
    components: {
        Logo
    },
    data() {
        return {
            version: packageJson.version,
            alert: {
                content: 'Test',
                ok: 'Ok'
            }
        };
    },
    mounted() {
        this.$store.dispatch('checkForUpdate');
        this.$store.subscribe(mutation => {
            if (mutation.type === 'incrementLog') {
                const amount = mutation.payload.amount;
                const habitName = this.$store.state.habits[
                    mutation.payload.habitId
                ].name;
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
        // window.Vue.vueDragula.eventBus.$on('dragend', () => {
        //     const items = Array.from(
        //         this.$el.querySelectorAll('.habit-list .md-card')
        //     ).map(singleNode => {
        //         return singleNode.dataset.key;
        //     });
        //     setTimeout(() => {
        //         this.$store.dispatch('updateSorting', items);
        //     }, 300);
        // });
    },
    methods: {
        reloadScreen() {
            window.location.reload();
        },
        gotoMain(name) {
            this.$refs.leftSidenav.close();
            router.push({ name });
        },
        toggleLeftSidenav() {
            this.$refs.leftSidenav.toggle();
        },
        newHabit() {
            router.push({ name: 'habit-add' });
        },
        goBack() {
            router.back();
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
};

</script>

<style>
.page {
    background-color: #eee;
}
.app,
body,
html {
    height: 100%;
    overflow: hidden;
}

.app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}

.page {
    overflow: auto;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 64px;
    z-index: 1;
}

.md-toolbar .md-title,
.md-toolbar .md-button {
    text-shadow: 1px 1px 0 rgba(0,0,0, .3);
}

.right.md-list-item > .md-list-item-container {
    justify-content: flex-end;
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
    opacity: .8;
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
    color: #78909c;
}

.md-list-item-container .md-button {
    margin: 0;
}

.version {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    opacity: .3;
}

p,
label,
[class*=-label] {
    user-select: none;
}

.md-theme-reddy .md-title,
.md-theme-reddy .md-subhead,
.md-theme-grey .md-title,
.md-theme-grey .md-subhead,
.md-theme-light-blue .md-title,
.md-theme-light-blue .md-subhead,
.md-theme-bluey .md-title,
.md-theme-bluey .md-subhead {
    color: white;
}
.separator {
    padding-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
}
.md-toolbar {
    box-shadow: 2px 2px 2px rgba(0,0,0,.4);
}

</style>
