<template>
  <div class="page">
    <div class="md-title">New Habit</div>
    <input type="hidden" v-model="id">
    <md-input-container>
        <label>Name</label>
        <md-input v-model="name"></md-input>
    </md-input-container>
    <md-input-container>
        <label>Goal</label>
        <md-input type="number" v-model="goal"></md-input>
    </md-input-container>
    <div class="controls">
        <md-button @click="update" class="md-raised md-primary">Save</md-button>
        <md-button @click="cancel" class="md-raised md-accent">Cancel</md-button>
        <md-button @click="remove" class="md-raised md-accent">Remove</md-button>
    </div>
  </div>
</template>

<script>

import router from '../router';

export default {
    name: 'habit-add',
    data() {
        return {
            name: 'Default name',
            goal: 100,
            id: null
        };
    },
    mounted() {
        if (this.$route.query.habitId) {
            const editMode = this.$store.state.habits[this.$route.query.habitId];
            if (editMode) {
                this.$set(this, 'goal', editMode.goal);
                this.$set(this, 'id', editMode.id);
                this.$set(this, 'name', editMode.name);
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
                name: this.name
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

<style>
.controls {
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}
</style>
