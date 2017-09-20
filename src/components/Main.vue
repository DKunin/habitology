<template>
   <div class="page">
      <div v-if="!Object.keys($store.state.habits).length" class="no-data-screen">
        <div @click="newHabit">
            <md-icon class="md-size-4x">add_circle_outline</md-icon>
        </div>
        <div>{{ $t("text.nohabits") }}</div>
    </div>
    <HabitCard
        v-if="$store.state.habits && !habit.destroy"
        v-for="habit in $store.state.habits"
        :key="habit.id"
        :habit="habit"
        :lastTime="lastTime"
        />

    <EmptyCard :visibility="Boolean(Object.keys($store.state.habits).length)" :onClick="newHabit" />

    <md-button v-if="false" @click="newHabit" class="md-fab md-primary add-button">
        <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>

import router from '../router';
import moment from 'moment';
import HabitCard from '@/components/HabitCard';
import EmptyCard from '@/components/EmptyCard';

export default {
    name: 'main',
    data() {
        return {};
    },
    components: {
        HabitCard,
        EmptyCard
    },
    methods: {
        newHabit() {
            router.push({ name: 'habit-add' });
        },
        lastTime(habit) {
            const currentHabitLog = this.$store.state.log
                .filter(({ habitId }) => habit.id === habitId)
                .sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                })[0];
            if (!currentHabitLog) {
                return null;
            }
            return moment(new Date(currentHabitLog.date)).calendar();
        }
    }
};

</script>

<style>
</style>
