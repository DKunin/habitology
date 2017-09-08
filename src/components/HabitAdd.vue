<template>
  <div class="page">
    <input type="hidden" v-model="id">
    <md-list class="md-double-line">
        <md-list-item>
            <md-input-container>
                <label>Name</label>
                <md-input v-model="name"></md-input>
            </md-input-container>
        </md-list-item>
        <md-list-item>
            <md-input-container>
                <label>Goal</label>
                <md-input type="number" v-model="goal"></md-input>
            </md-input-container>
        </md-list-item>
        <md-list-item>
            <md-button @click="update" class="md-raised md-primary">{{ $t("actions.save") }}</md-button>
            <md-button v-if="id" @click="remove" class="md-raised md-accent">{{ $t("actions.remove") }}</md-button>
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
            name: 'Default name',
            goal: 1000,
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

</style>
