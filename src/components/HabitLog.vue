<template>
  <div class="page">
    <div class="md-title">Habit Log</div>
    <div v-if="!filtered.length">
      No data
    </div>
    <md-table v-if="filtered.length">
      <md-table-header>
        <md-table-row>
          <md-table-head>Habit</md-table-head>
          <md-table-head>Date</md-table-head>
          <md-table-head md-numeric>Score</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(log, index) in filtered" :key="index">
          <md-table-cell>{{ getHabitName(log.habitId) }}</md-table-cell>
          <md-table-cell>{{ formatDate(log.date) }}</md-table-cell>
          <md-table-cell><a @click="editHabitIncrement(log.id)">{{ log.amount }}</a></md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
import fecha from 'fecha';
import router from '../router';

export default {
    name: 'habit-log',
    data() {
        return {
        };
    },
    computed: {
        filtered() {
            const queryHabit = this.$route.query.habitId;
            if (queryHabit === undefined || queryHabit === null) {
                return this.$store.state.log;
            }
            return this.$store.state.log.filter(({ habitId }) => queryHabit === habitId);
        }
    },
    methods: {
        formatDate(dateTime) {
            return fecha.format(new Date(dateTime), 'DD.MM.YY HH:mm');
        },
        getHabitName(habitId) {
            const habit = this.$store.state.habits[habitId];
            return habit.name;
        },
        editHabitIncrement(logId) {
            router.push({ name: 'increment-edit', query: { logId } });
        }
    }
};
</script>

<style>
</style>
