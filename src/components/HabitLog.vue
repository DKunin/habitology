<template>
  <div class="page">
    <div v-if="!filtered.length" class="no-data-screen">
        <div>
            <md-icon class="md-size-4x">update</md-icon>
        </div>
        <div>{{ $t("text.nolog") }}</div>
    </div>
    <md-list v-if="filtered.length">

        <md-list-item v-for="(log, index) in filtered" :key="index">
            <md-avatar>
                <div class="log-item" @click="editHabitIncrement(log.id)">{{ log.amount }}</div>
            </md-avatar>
            <div class="md-list-text-container">
                <span>{{getHabitName(log.habitId)}}</span>
                <p>{{ formatDate(log.date) }}</p>
            </div>
        </md-list-item>
    </md-list>
    <md-table v-if="false">
      <md-table-header>
        <md-table-row>
          <md-table-head>{{ $t("log.habit") }}</md-table-head>
          <md-table-head>{{ $t("log.date") }}</md-table-head>
          <md-table-head md-numeric>{{ $t("log.score") }}</md-table-head>
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
            let queryHabit = this.$route.query.habitId;
            if (queryHabit === undefined || queryHabit === null) {
                return this.$store.state.log;
            }
            queryHabit = parseInt(queryHabit);
            return this.$store.state.log.filter(({ habitId }) => queryHabit === habitId);
        }
    },
    methods: {
        formatDate(dateTime) {
            return fecha.format(new Date(dateTime), 'DD.MM.YY');
        },
        getHabitName(habitId) {
            const habit = this.$store.state.habits[habitId];
            if (!habit) {
                return '';
            }
            return habit.name;
        },
        editHabitIncrement(logId) {
            router.push({ name: 'increment-edit', query: { logId } });
        }
    }
};
</script>

<style scoped>
.md-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
}
.log-item {
    font-size: 30px;
}
</style>
