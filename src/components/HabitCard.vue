<template>
    <md-card :md-theme="habit.theme ? habit.theme : 'default'" :data-key="habit.id">
        <Icon className="md-icon md-accent reorder-icon" :size="18">
            <IconReorder />
        </Icon>

      <md-card-header>
        <div class="md-title open-habit-log-button" @click="getHabitLog(habit.id)">
            {{ habit.name }}
        </div>
        <div class="md-subhead">
            {{ count }} ({{ percent }}%) 
            <div class="last-update">{{ $props.lastTime(habit) }}</div>
        </div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="habitIncrement(habit.id)" class="md-icon-button md-list-action">
            <Icon :className="'add-increment-button md-icon md-accent md-theme-' + habit.theme" >
                <IconAdd />
            </Icon>
        </md-button>
        <md-menu
            md-size="5"
            md-direction="bottom left"
            :md-close-on-select="true"
            :md-align-trigger="true">
            <md-button class="md-icon-button habit-menu-trigger" md-menu-trigger>
                <Icon className="md-icon md-accent" :size="18">
                    <IconMoreHoriz />
                </Icon>
            </md-button>

            <md-menu-content>
              <md-menu-item @click="editHabit(habit.id)">
                <Icon :className="'edit-habit-button md-icon md-accent md-theme-' + habit.theme" >
                    <IconCreate />
                </Icon>
                <span>{{ $t('actions.edit') }}</span>
              </md-menu-item>
              <md-menu-item @click="getHabitLog(habit.id)">
                <Icon :className="'md-icon md-accent md-theme-' + habit.theme" >
                    <IconUpdate />
                </Icon>
                <span>{{ $t('titles.log') }}</span>
              </md-menu-item>
              <md-menu-item @click="shareResult(habit)">
                <Icon :className="'md-icon md-accent md-theme-' + habit.theme" >
                    <IconShare />
                </Icon>
                <span>{{ $t('titles.share') }}</span>
              </md-menu-item>
            </md-menu-content>
      </md-menu>

      </md-card-actions>
        <md-progress :md-progress="percent"></md-progress>
    </md-card>
</template>

<script>

import { mapActions } from 'vuex';
const actions = mapActions(['toggleDraging']);

import router from '../router';
let holdTimeout = setTimeout(() => {});
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
    methods: Object.assign(actions, {
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
        },
        mouseDown() {
            clearTimeout(holdTimeout);
            holdTimeout = setTimeout(() => {
                this.toggleDraging(true);
            }, 500);
        },
        mouseUp() {
            clearTimeout(holdTimeout);
            // this.toggleDraging(false);
        }
    }),
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
    user-select: none;
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
    min-height: 12px;
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
.reorder-icon {
    width: 14px;
    display: block;
    min-width: auto;
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 4px;
    left: -3px;
    opacity: .3;
}
</style>
