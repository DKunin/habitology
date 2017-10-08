<template>
   <div class="page">
      <div v-if="!Object.keys($store.state.habits).length" class="no-data-screen">
        <div @click="newHabit">
            <Icon className :size="50">
                <IconAddCircleOutline />
            </Icon>
        </div>
        <div>{{ $t("text.nohabits") }}</div>
    </div>
    <draggable v-model="sortedHabits" :options="{handle: '.reorder-icon'}">
        <HabitCard
            v-if="sortedHabits && !habit.destroy"
            v-for="habit in sortedHabits"
            :key="habit.id"
            :habit="habit"
            :lastTime="lastTime"
            />
    </draggable>

    <EmptyCard :visibility="Boolean(Object.keys($store.state.habits).length)" :onClick="newHabit" />
  </div>
</template>

<script>

import draggable from 'vuedraggable';
import moment from 'moment';
import HabitCard from '@/components/HabitCard';
import EmptyCard from '@/components/EmptyCard';
import router from '../router';

export default {
    name: 'main',
    data() {
        return {};
    },
    components: {
        HabitCard,
        EmptyCard,
        draggable
    },
    computed: {
        sortedHabits: {
            get() {
                const { sorting } = this.$store.state;
                const habits = this.$store.state.habits;
                if (
                    Array.isArray(sorting) &&
                    sorting.length === Object.keys(habits).length
                ) {
                    return sorting.map(singleHabitId => {
                        return habits[singleHabitId];
                    });
                }

                return Object.keys(habits).map(singleKeyMap => {
                    return habits[singleKeyMap];
                });
            },
            set(value) {
                const ids = value.map(({ id }) => id);
                this.$store.dispatch('updateSorting', ids);
            }
        }
    },
    methods: {
        newHabit() {
            router.replace({ name: 'habit-add' });
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
.habit-list {
    position: relative;
}
</style>
