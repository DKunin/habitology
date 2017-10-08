<template>
  <div class="page">
    <md-whiteframe v-if="filtered.length" md-tag="section" md-elevation="8">
        <md-list>
            <md-list-item>
                {{ $t('titles.allItems') }} {{ filtered.length }}
            </md-list-item>
            <md-list-item v-if="streakInfo.isCurrentlyOnStreak">
                {{ $t('titles.currentStreak') }} {{ streakInfo.lengthOfTheStreak }}
            </md-list-item>
        </md-list>
    </md-whiteframe>
    <div v-if="!filtered.length" class="no-data-screen">
        <div>
            <Icon className :size="50">
                <IconUpdate />
            </Icon>
        </div>
        <div>{{ $t("text.nolog") }}</div>
    </div>
    <md-list v-if="filtered.length">
        <md-list-item v-for="(log, index) in filtered" :key="index">
            <md-avatar>
                <div class="log-item" @click="editHabitIncrement(log.id)">{{ log.amount }}</div>
            </md-avatar>
            <div class="md-list-text-container">
                <span>{{ getHabitName(log.habitId) }} <a class="edit-log" @click="editHabitIncrement(log.id)">
                    <Icon>
                        <IconCreate />
                    </Icon>
                </a></span>
                <p>{{ formatDate(log.date) }}</p>
            </div>
        </md-list-item>
    </md-list>

    <EmptyCard v-if="filtered.length" :visibility="Boolean($route.query.habitId)" :onClick="addHabitIncrement($route.query.habitId)" />
  </div>
</template>

<script>

import EmptyCard from '@/components/EmptyCard';
import moment from 'moment';
import router from '../router';
import { determineStreak } from 'date-streak';

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
        },
        streakInfo() {
            const dates = this.filtered.map(({ date }) => date);
            return determineStreak(dates);
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
            router.replace({ name: 'increment-edit', query: { logId } });
        },
        addHabitIncrement(habitId) {
            return () => {
                router.replace({ name: 'habit-increment', params: { habitId } });
            };
        }
    }
};

</script>

<style scoped>
.md-whiteframe-8dp {
    margin: 15px;
}
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
