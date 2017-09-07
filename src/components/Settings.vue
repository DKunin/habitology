<template>
    <div class="page">
        <md-list class="md-double-line">
            <md-list-item>
                <md-input-container>
                    <label for="locale">{{ $t("settings.locale") }}</label>
                    <md-select name="locale" id="locale" v-model="locale" @change="handleChange">
                        <md-option value="ru">Русский</md-option>
                        <md-option value="en">English</md-option>
                    </md-select>
                </md-input-container>
            </md-list-item>
        </md-list>
    </div>
</template>

<script>

export default {
    name: 'settings',
    data() {
        return {
            locale: this.$store.state.locale
        };
    },
    methods: {
        handleChange() {
            this.$store.dispatch('localeSet', this.locale);
        }
    }
};
</script>

<style>
</style>
