<template>
  <div class="page">
    <div class="md-title main-title">New Habit</div>
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
            goal: 100
        };
    },
    methods: {
        cancel: function() {
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
