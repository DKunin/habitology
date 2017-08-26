<template>
  <div>
    <ul>
        <li v-for="habit in $store.state.habits">
            {{habit.name}} <button @click="habitLog(habit.id)">log</button> <button @click="habitIncrement(habit.id)">{{habit.count}}</button>
        </li>
    </ul>
    <button @click="newHabit">+</button>
  </div>
</template>

<script>
import router from '../router';

export default {
    name: 'main',
    data() {
        return {
        };
    },
    methods: {
        newHabit: () => {
            router.push({ name: 'habit-edit', params: { habitId: null }});
        },
        habitIncrement: (habitId) => {
            router.push({ name: 'habit-increment', params: { habitId }});
        },
        habitLog: (habitId) => {
            router.push({ name: 'habit-log', params: { habitId }});
        }
    }
};
</script>

<style scoped>
    button {
        background-color: gray;
    }
</style>
