<template>
    <div class="page">
        <md-list class="md-double-line">
            <md-list-item v-if="$store.state.user && $store.state.user.email">
                <div>{{$store.state.user.email}}</div>
                <md-button @click="logOut()" class="md-raised md-primary">
                    {{ $t("settings.logout") }}
                </md-button>
            </md-list-item>

            <md-list-item v-if="!$store.state.user.email">
                <md-input-container>
                    <label>{{ $t("settings.email") }}</label>
                    <md-input v-model="email"></md-input>
                </md-input-container>
            </md-list-item>

            <md-list-item v-if="!$store.state.user.email">
              <md-input-container md-has-password>
                <label>{{ $t("settings.password") }}</label>
                <md-input v-model="password" type="password"></md-input>
              </md-input-container>
            </md-list-item>

            <md-list-item v-if="!$store.state.user.email">
                <md-button @click="signUp()" class="md-raised">
                    {{ $t("settings.signup") }}
                </md-button>
                <md-button @click="signIn()" class="md-raised md-primary">
                    {{ $t("settings.login") }}
                </md-button>
            </md-list-item>
            <hr />
            <md-list-item>
                <md-input-container>
                    <label for="locale">{{ $t("settings.locale") }}</label>
                    <md-select name="locale" v-model="locale">
                        <md-option value="ru">Русский</md-option>
                        <md-option value="en">English</md-option>
                    </md-select>
                </md-input-container>
            </md-list-item>

            <md-list-item>
                <md-button @click="saveSettings" type="button" class="md-raised md-primary">
                    {{ $t("settings.save") }}
                </md-button>
            </md-list-item>

        </md-list>
        <md-snackbar md-position="bottom center" ref="snackbar" :md-duration="4000">
          <span>{{ $t(`serverErrorMessages.${errorCode}`) }}</span>
          <md-button class="md-accent" md-theme="default" @click="$refs.snackbar.close()">Close</md-button>
        </md-snackbar>
        <div class="version">{{ version }}</div>
    </div>
</template>

<script>

import packageJson from '../../package.json';

export default {
    name: 'settings',
    data() {
        return {
            locale: this.$store.state.locale,
            email: '',
            password: '',
            errorCode: 'noerror',
            version: packageJson.version
        };
    },
    methods: {
        signIn() {
            window.firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    this.$store.dispatch('logIn', user);
                })
                .catch(error => {
                    this.$set(
                        this,
                        'errorCode',
                        error.code.replace('auth/', '')
                    );
                    this.$refs.snackbar.open();
                });
        },
        logOut() {
            window.firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$store.dispatch('logOut');
                });
        },
        signUp() {
            window.firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.signIn();
                })
                .catch(error => {
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
};

</script>

<style scoped>
.version {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    opacity: .3;
}
</style>
