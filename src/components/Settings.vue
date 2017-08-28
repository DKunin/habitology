<template>
  <div class="page">
    <div class="md-title main-title">Settings</div>
  </div>
</template>

<script>

export default {
    name: 'settings',
    data() {
        return {
        };
    },
    computed: {
        filtered() {
            return this.$store.state.log;
        }
    }
};
</script>

<style>
</style>
