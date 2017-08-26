<template>
  <div>
    <h2>Settings</h2>
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
