<template>
  <div class="page">
    <input type="hidden" v-model="id">
    <md-list class="md-double-line">
        <md-list-item>
            <md-input-container>
                <label>{{ $t("titles.name") }}</label>
                <md-input v-model="name"></md-input>
            </md-input-container>
        </md-list-item>
        <md-list-item>
            <md-input-container>
                <label>{{ $t("titles.goal") }}</label>
                <md-input type="number" v-model="goal"></md-input>
            </md-input-container>
        </md-list-item>
        <md-list-item>
            <div class="themes">
                <div v-for="color in themes">
                    <label :for="color" :class="'single-theme ' + color">
                        <input class="theme-radio" :id="color" type="radio" v-model="theme" name="theme" :value="color">
                        <md-icon class="color-check">check</md-icon>
                    </label>
                </div>
            </div>
        </md-list-item>
        <md-list-item>
            <md-checkbox name="continuingGoal" v-model="continuingGoal">{{ $t("titles.continuing-goal") }}</md-checkbox>
        </md-list-item>
        <md-list-item v-if="continuingGoal || initialValue">
            <md-input-container>
                <label>{{ $t("titles.initial-value") }}</label>
                <md-input type="number" v-model="initialValue"></md-input>
            </md-input-container>
        </md-list-item>
        <md-list-item>
            <md-button v-if="id" @click="remove" class="md-raised md-accent">{{ $t("actions.remove") }}</md-button>
            <md-button @click="update" class="md-raised md-primary">{{ $t("actions.save") }}</md-button>
        </md-list-item>
    </md-list>
  </div>
</template>

<script>

import router from '../router';

export default {
    name: 'habit-add',
    data() {
        return {
            name: '',
            goal: 1000,
            id: null,
            initialValue: null,
            continuingGoal: false,
            theme: 'default',
            themes: ['default', 'reddy', 'orangy', 'bluey', 'light-blue']
        };
    },
    mounted() {
        if (this.$route.query.habitId) {
            const editMode = this.$store.state.habits[
                this.$route.query.habitId
            ];
            if (editMode) {
                this.$set(this, 'goal', editMode.goal);
                this.$set(this, 'id', editMode.id);
                this.$set(this, 'name', editMode.name);
                this.$set(this, 'theme', editMode.theme);
                this.$set(this, 'initialValue', editMode.initialValue || null);
                this.$set(
                    this,
                    'continuingGoal',
                    editMode.initialValue ? true : false
                );
            }
        }
    },
    methods: {
        cancel() {
            router.push({ name: 'main' });
        },
        update() {
            const payload = {
                goal: this.goal,
                name: this.name,
                theme: this.theme,
                initialValue: this.initialValue
            };
            if (this.id) {
                payload.id = this.id;
            }

            this.$store.dispatch('updateHabit', payload);
            router.push({ name: 'main' });
        },
        remove() {
            this.$store.dispatch('removeHabit', this.id);
            router.push({ name: 'main' });
        }
    }
};

</script>

<style scoped>
.themes {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.single-theme {
    background-color: white;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
}

.single-theme.default .md-icon {
    color: black;
}

.single-theme.reddy {
    background-color: #c62828;
}
.single-theme.reddy .md-icon {
    color: white;
}

.single-theme.bluey {
    background-color: #1976d2;
}
.single-theme.bluey .md-icon {
    color: white;
}

.single-theme.light-blue {
    background-color: #03a9f4;
}
.single-theme.light-blue .md-icon {
    color: white;
}

.single-theme.greeny {
    background-color: #388e3c;
}
.single-theme.greeny .md-icon {
    color: white;
}

.single-theme.orangy {
    background-color: #b71c1c;
}
.single-theme.orangy .md-icon {
    color: white;
}

.color-check {
    display: none;
    position: absolute;
    top: 3px;
    left: 3px;
}
.theme-radio {
    display: none;
}
.theme-radio:checked + .color-check {
    display: block;
}
</style>
