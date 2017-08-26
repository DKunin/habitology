<template>
  <div>
        <div>
          <md-list>
            <md-list-item v-for="habit in $store.state.habits" :key="habit.id">
                <span>{{habit.name}} {{habit.count}}</span>

                <md-button @click="habitIncrement(habit.id)" class="md-icon-button md-list-action">
                    <md-icon class="md-primary">note_add</md-icon>
                </md-button>
            </md-list-item>
          </md-list>
        </div>

        <md-button @click="newHabit" class="md-fab md-primary add-button">
            <md-icon>add</md-icon>
        </md-button>
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
        newHabit() {
            router.push({ name: 'habit-add' });
        },
        habitIncrement(habitId) {
            router.push({ name: 'habit-increment', params: { habitId }});
        },
        habitLog(habitId) {
            router.push({ name: 'habit-log', params: { habitId }});
        }
    }
};
</script>

<style scoped>
    .add-button {
        position: fixed;
        bottom: 70px;
        right: 15px;
    }
</style>
