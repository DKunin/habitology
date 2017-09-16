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
            {{countHabit(habit)}} ({{ countPercent(countHabit(habit), habit.goal) }}%) 
            <a v-if="false" @click="editHabit(habit.id)"><md-icon class="md-primary">create</md-icon></a>
        </div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="habitIncrement(habit.id)" class="md-icon-button md-list-action">
            <md-icon class="white-icon">add</md-icon>
        </md-button>
        <md-menu
            md-size="5"
            md-direction="bottom left"
            :md-close-on-select="true"
            :md-align-trigger="true">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>more_horiz</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item @click="editHabit(habit.id)">
                <md-icon>create</md-icon>
                <span>{{ $t('actions.edit') }}</span>
              </md-menu-item>
              <md-menu-item @click="getHabitLog(habit.id)">
                <md-icon>update</md-icon>
                <span>{{ $t('titles.log') }}</span>
              </md-menu-item>
            </md-menu-content>
      </md-menu>

      </md-card-actions>
      <md-progress :md-progress="countPercent(countHabit(habit), habit.goal)"></md-progress>
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
        return {};
    },
    methods: {
        newHabit() {
            router.push({ name: 'habit-add' });
        },
        countHabit(habit) {
            return this.$store.state.log.reduce((newCount, currentObject) => {
                if (
                    currentObject.habitId === habit.id &&
                    !currentObject.destroy
                ) {
                    return newCount + parseInt(currentObject.amount);
                }
                return newCount;
            }, parseInt(habit.initialValue) || 0);
        },
        countPercent(current, goal) {
            return Math.ceil(current * 100 / goal);
        },
        habitIncrement(habitId) {
            router.push({ name: 'habit-increment', params: { habitId } });
        },
        editHabit(habitId) {
            router.push({ name: 'habit-add', query: { habitId } });
        },
        getHabitLog(habitId) {
            router.push({ name: 'habit-log', query: { habitId } });
        }
    }
};

</script>

<style scoped>
.md-card {
    margin: 15px;
}
.md-card .md-card-header {
    background-color: #607d8b;
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
    border: 2px dashed #607d8b;
}
.md-theme-default.md-card .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {
    color: white;
}
</style>
