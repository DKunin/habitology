<template>
  <div>
    <input v-model="name" placeholder="Name">
    <input type="number" v-model="goal" placeholder="Goal">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'habit-add',
    data() {
        return {
            name: 'Default name',
            goal: 100
        };
    },
    computed: mapGetters([
        'evenOrOdd'
    ]),
    methods: mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
    ])
};
</script>

<style>
</style>
