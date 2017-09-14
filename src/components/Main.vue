<template>
   <div class="page colored">
      <div v-if="!Object.keys($store.state.habits).length" class="no-data-screen">
        <div @click="newHabit">
            <md-icon class="md-size-4x">add_circle_outline</md-icon>
        </div>
        <div>{{ $t("text.nohabits") }}</div>
    </div>
    <md-card v-if="$store.state.habits && !habit.destroy" v-for="habit in $store.state.habits" :key="habit.id">
      <md-card-header>
        <div class="md-title" @click="getHabitLog(habit.id)">
            {{habit.name}}
        </div>
        <div class="md-subhead">
            {{countHabit(habit.id)}} ({{ countPercent(countHabit(habit.id), habit.goal) }}%) 
                <a @click="editHabit(habit.id)"><md-icon class="md-primary">create</md-icon></a>
        </div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="habitIncrement(habit.id)" class="md-icon-button md-list-action">
            <md-icon>note_add</md-icon>
        </md-button>
      </md-card-actions>
      <md-progress :md-progress="countPercent(countHabit(habit.id), habit.goal)"></md-progress>
    </md-card>

    <md-card v-if="Object.keys($store.state.habits).length" class="empty-card" >
        <md-card-content >
            <div @click="newHabit">
                <md-icon class="md-size-2x">add_circle_outline</md-icon>
            </div>
        </md-card-content>
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
                if (currentObject.habitId === habitId && !currentObject.destroy) {
                    return newCount + parseInt(currentObject.amount);
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
    .md-card {
        margin: 15px;
    }
    .md-card .md-card-header {
        background-color: #607D8B;
        color: white;
    }
    
    .md-card .md-card-header .md-title {
        margin-top: 0 !important;
    }
    .md-card-actions {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .md-card .md-title {
        max-width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .md-card .md-card-actions .md-button + .md-button {
        margin: 0;
    }
    .md-subhead .md-icon {
        font-size: 20px;
    }
    .empty-card {
        opacity: .4;
        text-align: center;
        cursor: pointer;
        box-shadow: none;
    }
    .empty-card .md-card-content {
        padding: 10px;
        border: 2px dashed #607D8B;
    }
</style>
