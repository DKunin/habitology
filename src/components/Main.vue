<template>
   <div class="page">
      <div v-if="!Object.keys($store.state.habits).length" class="no-data-screen">
        <div @click="newHabit">
            <md-icon class="md-size-4x">add_circle_outline</md-icon>
        </div>
        <div>{{ $t("text.nohabits") }}</div>
    </div>
    <md-card :md-theme="habit.theme ? habit.theme : 'default'" v-if="$store.state.habits && !habit.destroy" v-for="habit in $store.state.habits" :key="habit.id">
      <md-card-header>
        <div class="md-title" @click="getHabitLog(habit.id)">
            {{ habit.name }}
        </div>
        <div class="md-subhead">
            {{ countHabit(habit) }} ({{ countPercent(countHabit(habit), habit.goal) }}%) 
            <div class="last-update">{{ lastTime(habit) }}</div>
        </div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="habitIncrement(habit.id)" class="md-icon-button md-list-action">
            <md-icon class="md-accent">add</md-icon>
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
                <md-icon class="md-accent">create</md-icon>
                <span>{{ $t('actions.edit') }}</span>
              </md-menu-item>
              <md-menu-item @click="getHabitLog(habit.id)">
                <md-icon class="md-accent">update</md-icon>
                <span>{{ $t('titles.log') }}</span>
              </md-menu-item>
              <md-menu-item @click="shareResult(habit)">
                <md-icon class="md-accent">share</md-icon>
                <span>{{ $t('titles.share') }}</span>
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
import moment from 'moment';

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
        },
        shareResult(habit) {
            if (window.navigator.share) {
                window.navigator
                    .share({
                        title: 'My habit goals',
                        text: `I reached ${this.countPercent(this.countHabit(habit), habit.goal)} of my ${habit.name} goal!`
                    })
                    .then(() => console.log('Successful share'))
                    .catch(error => console.log('Error sharing', error));
            }
        }
    }
};

</script>

<style scoped>
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

.last-update {
    font-style: italic;
}
</style>
