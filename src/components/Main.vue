<template>
  <div class="page">
    <md-card v-for="habit in $store.state.habits" :key="habit.id">
      <md-card-header>
        <div class="md-title" @click="getHabitLog(habit.id)">
            {{habit.name}}
        </div>
        <div class="md-subhead">{{countHabit(habit.id)}} ({{ countPercent(countHabit(habit.id), habit.goal) }}%)</div>
      </md-card-header>
        <md-card-actions>
        <md-button @click="editHabit(habit.id)" class="md-icon-button md-list-action">
            <md-icon class="md-primary">create</md-icon>
        </md-button>
        <md-button @click="habitIncrement(habit.id)" class="md-icon-button md-list-action">
            <md-icon class="md-primary">note_add</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

    <md-button v-if="false" @click="newHabit" class="md-fab md-primary add-button">
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
    .page {
        background-color: #172369;
    }
    .md-card {
        margin: 15px;
    }
    .md-card .md-card-header .md-title {
        margin-top: 0 !important;
    }
    .md-card-actions {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>
