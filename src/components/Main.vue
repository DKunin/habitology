<template>
  <div class="page">
    <div class="md-title">{{ $t("titles.habits") }}</div>
    
    <md-list>
        <md-list-item v-for="habit in $store.state.habits" :key="habit.id" @click="getHabitLog(habit.id)">
            <div >{{habit.name}} {{countHabit(habit.id)}} ({{ countPercent(countHabit(habit.id), habit.goal) }}%) </div>
            <md-button @click="editHabit(habit.id)" class="md-icon-button md-list-action">
                <md-icon class="md-primary">create</md-icon>
            </md-button>

            <md-button @click="habitIncrement(habit.id)" class="md-icon-button md-list-action">
                <md-icon class="md-primary">note_add</md-icon>
            </md-button>
        </md-list-item>
    </md-list>

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
            return Math.ceil(current * 100 / goal);
        },
        habitIncrement(habitId) {
            router.push({ name: 'habit-increment', params: { habitId }});
        },
        editHabit(habitId) {
            router.push({ name: 'habit-add', query: { habitId } });
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
