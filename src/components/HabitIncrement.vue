<template>
  <div class="page">
    <div class="md-title main-title">Add Habitscore</div>
    <div class="md-display-3 main-date" @click="toggleDateComponent">{{formatDate(date)}}</div>
    <input class="hidden date" type="date" @change="processDate">
    <input type="hidden" v-model="habitId">
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
            date: new Date().getTime(),
            amount: null,
            habitId: this.$route.params.habitId
        };
    },
    methods: Object.assign(actions, {
        processDate: function(event) {
            this.$set(this, 'date', new Date(event.target.value));
        },
        update: function() {
            const newObject = {
                date: this.date,
                amount: parseInt(this.amount),
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
        toggleDateComponent: function() {
            this.$el.querySelector('.date').click();
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
    text-align: center;
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
