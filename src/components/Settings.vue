<template>
  <div class="page">
    <div class="md-title">{{ $t("titles.settings") }}</div>
    <md-input-container>
        <label for="locale">Locale</label>
        <md-select name="locale" id="locale" v-model="locale" @change="handleChange">
          <md-option value="ru">Русский</md-option>
          <md-option value="en">English</md-option>
        </md-select>
    </md-input-container>
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
