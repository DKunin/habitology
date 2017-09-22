<template>
    <md-card :md-theme="habit.theme ? habit.theme : 'default'" :data-key="habit.id">
      <md-card-header>
        <div class="md-title" @click="getHabitLog(habit.id)">
            {{ habit.name }}
        </div>
        <div class="md-subhead">
            {{ count }} ({{ percent }}%) 
            <div class="last-update">{{ $props.lastTime(habit) }}</div>
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
        <md-progress :md-progress="percent"></md-progress>
    </md-card>
</template>

<script>

import router from '../router';

export default {
    name: 'habit-card',
    data() {
        return {};
    },
    props: {
        habit: {
            type: Object,
            default: {}
        },
        lastTime: {
            type: Function,
            default: () => {}
        }
    },
    mounted() {},
    methods: {
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
                        text: `I reached ${this
                            .percent}% of my ${habit.name} goal!`,
                        url: 'https://dkunin.github.io/habitology/'
                    })
                    .then(() => console.log('Successful share'))
                    .catch(error => console.log('Error sharing', error));
            }
        }
    },
    computed: {
        count() {
            const habit = this.habit;
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
        percent() {
            return Math.ceil(this.count * 100 / this.habit.goal);
        }
    }
};

</script>

<style>
.md-card {
    margin: 15px;
}

.md-card .md-card-header .md-title {
    margin-top: 0 !important;
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
.last-update {
    font-style: italic;
}
.md-card .md-card-actions {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>
