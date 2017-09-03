<template>
  <div class="page">
    <div class="md-title">Add Habitscore</div>
    <span class="md-subheading">{{showHabitName(habitId)}}</span>
    <input type="hidden" v-model="habitId">

    <md-input-container>
        <md-icon>event</md-icon>
        <label>Date</label>
        <md-input v-model="date" type="date"></md-input>
    </md-input-container>
    <md-input-container>
        <md-icon>star</md-icon>
        <label>Rating</label>
        <md-input v-model="amount" type="number"></md-input>
    </md-input-container>
    <div class="controls">
        <md-button @click="update" class="md-raised md-primary">Save</md-button>
        <md-button @click="cancel" class="md-raised md-accent">Cancel</md-button>
    </div>
  </div>
</template>

<script>
import router from '../router';
import { mapActions } from 'vuex';
import fecha from 'fecha';

const actions = mapActions([
    'incrementLog'
]);

export default {
    name: 'habitIncrement',
    data() {
        return {
            date: fecha.format(new Date(), 'YYYY-MM-DD'),
            amount: null,
            habitId: this.$route.params.habitId
        };
    },
    methods: Object.assign(actions, {
        update: function() {
            console.log(this.date);
            const newObject = {
                date: new Date(this.date),
                amount: parseInt(this.amount || 0),
                habitId: parseInt(this.habitId)
            };
            this.incrementLog(newObject);
            if (window.navigator) {
                window.navigator.vibrate(100, 50);
            }
            router.push({ name: 'main' });
        },
        formatDate(dateTime) {
            return fecha.format(dateTime, 'DD.MM.YY');
        },
        cancel: function() {
            router.push({ name: 'main' });
        },
        showHabitName: function(id) {
            return this.$store.state.habits[id].name;
        }
    })
};
</script>

<style scoped>
.hidden {
    opacity: 0;
    width: 0;
    height: 0;
}

.main-date {
    user-select: none;
}

.controls {
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}
</style>
