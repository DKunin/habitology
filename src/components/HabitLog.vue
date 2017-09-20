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
                <span>{{ getHabitName(log.habitId) }} <a class="edit-log" @click="editHabitIncrement(log.id)"><md-icon class="md-primary">create</md-icon></a></span>
                <p>{{ formatDate(log.date) }}</p>
                
            </div>
        </md-list-item>
    </md-list>
    <EmptyCard :visibility="Boolean($route.query.habitId)" :onClick="addHabitIncrement($route.query.habitId)" />
  </div>
</template>

<script>

import EmptyCard from '@/components/EmptyCard';
import moment from 'moment';
import router from '../router';

export default {
    name: 'habit-log',
    data() {
        return {};
    },
    components: {
        EmptyCard
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
        },
        addHabitIncrement(habitId) {
            return () => {
                router.push({ name: 'habit-increment', params: { habitId } });
            };
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
.empty-card {
    margin: 20px;
}

.edit-log {
    float: right;
    opacity: .4;
}
</style>
