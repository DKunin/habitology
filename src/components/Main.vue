<template>
  <div class="page">
    <div class="md-title main-title">Habits</div>
    <div>
      <md-list>
        <md-list-item v-for="habit in $store.state.habits" :key="habit.id">
            <span @click="getHabitLog(habit.id)">{{habit.name}} {{countHabit(habit.id)}} ({{ countPercent(countHabit(habit.id),habit.goal) }}%) </span>

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
        countHabit(habitId) {
            return this.$store.state.log.reduce((newCount, currentObject) => {
                if (currentObject.habitId === habitId) {
                    return newCount + currentObject.amount;
                }
                return newCount;
            }, 0);
        },
        countPercent(current, goal) {
            return current * 100 / goal;
        },
        habitIncrement(habitId) {
            router.push({ name: 'habit-increment', params: { habitId }});
        },
        getHabitLog(habitId) {
            router.push({ name: 'habit-log', query: { habitId }});
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
