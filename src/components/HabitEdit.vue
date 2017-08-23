<template>
  <div>
    <ul>
        <input v-model="name" placeholder="Name">
        <select v-model="type">
            <option v-for="type in $store.state.types">{{ type.id }}</option>
        </select>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
    name: 'main',
    data() {
        return {
            name: 'Default name',
            type: false
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
