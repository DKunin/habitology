<template>
  <div>
    <ul>
        <li v-for="habit in $store.state.habits">
            {{habit.name}} {{habit.count}}
        </li>
    </ul>
    <button @click="newHabit">+</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
    // eslint-disable-next-line
const methods = mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
]);
import router from '../router';

export default {
    name: 'main',
    data() {
        return {
        };
    },

    computed: mapGetters([
        'evenOrOdd'
    ]),
    methods: Object.assign(methods, {
        newHabit: () => {
            console.log(this);
            router.push({ name: 'habit-edit', params: { habitId: 0 }});
        }
    })
};
</script>

<style>
</style>
