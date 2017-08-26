<template>
  <div>
    <h2>Log</h2>
    {{$route.params.id}}
    <ul>
        <li v-for="log in filtered">
            {{ log.id }}
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    name: 'main',
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
