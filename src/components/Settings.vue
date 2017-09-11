<template>
    <div class="page">
        <md-list class="md-double-line">
            <md-list-item v-if="$store.state.user && $store.state.user.email">
                <div>{{$store.state.user.email}}</div>
                <md-button @click="logOut()" class="md-raised md-primary">
                    Log out
                </md-button>
            </md-list-item>

            <md-list-item v-if="!$store.state.user.email">
                <md-input-container>
                    <label>email</label>
                    <md-input v-model="email"></md-input>
                </md-input-container>
            </md-list-item>

            <md-list-item v-if="!$store.state.user.email">
              <md-input-container md-has-password>
                <label>Password</label>
                <md-input v-model="password" type="password"></md-input>
              </md-input-container>
            </md-list-item>

            <md-list-item v-if="!$store.state.user.email">
                <md-button @click="signIn()" class="md-raised md-primary">
                    Sign in
                </md-button>
                <md-button @click="signUp()" class="md-raised md-primary">
                    Sign up
                </md-button>
            </md-list-item>

            <md-list-item>
                <md-input-container>
                    <label>ApiKey</label>
                    <md-input v-model="apiKey"></md-input>
                </md-input-container>
            </md-list-item>

            <md-list-item>
                <md-input-container>
                    <label for="locale">{{ $t("settings.locale") }}</label>
                    <md-select name="locale" id="locale" v-model="locale">
                        <md-option value="ru">Русский</md-option>
                        <md-option value="en">English</md-option>
                    </md-select>
                </md-input-container>
            </md-list-item>

            <md-list-item>
                <md-button @click="saveSettings" type="button" class="md-raised md-primary">
                    Save
                </md-button>
            </md-list-item>

        </md-list>
    </div>
</template>

<script>

export default {
    name: 'settings',
    data() {
        return {
            locale: this.$store.state.locale,
            apiKey: this.$store.state.apiKey,
            email: null,
            password: null
        };
    },
    mounted() {
        console.log(this.$store.state.user);
    },
    methods: {
        signIn() {
            window.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    this.$store.dispatch('logIn', user);
                })
                .catch(function(error) {
                    console.log(error, error.message);
                });
        },
        logOut() {
            window.firebase.auth().signOut()
                .then(() => {
                    this.$store.dispatch('logOut');
                });
        },
        signUp() {
            window.firebase.auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(result => {
                    console.log('signUp', result);
                })
                .catch(function(error) {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    console.log(error, error.message);
                });
        },
        saveSettings() {
            this.$store.dispatch('saveSettings', {
                apiKey: this.apiKey,
                locale: this.locale
            });
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }
};
</script>

<style>
</style>
