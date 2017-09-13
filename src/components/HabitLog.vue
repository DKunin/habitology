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
                <span>{{ getHabitName(log.habitId) }}</span>
                <p>{{ formatDate(log.date) }}</p>
            </div>
        </md-list-item>
    </md-list>
  </div>
</template>

<script>
import moment from 'moment';
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
                return this.$store.state.log.filter(({ destroy }) => !destroy);
            }
            queryHabit = parseInt(queryHabit);
            return this.$store.state.log
                .filter(({ destroy }) => !destroy)
                .filter(({ habitId }) => queryHabit === habitId)
                .sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
        }
    },
    mounted() {
        moment.locale(this.$store.state.locale);
    },
    methods: {
        formatDate(dateTime) {
            return moment(new Date(dateTime)).calendar();
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
    font-size: 25px;
}
</style>
