<template>
  <div class="page">
    <input type="hidden" v-model="habitId">
    <md-list class="md-double-line">
        <md-list-item>
            <span class="md-subheading">{{showHabitName(habitId)}}</span>
        </md-list-item>
        <md-list-item>
            <md-input-container>
                <md-icon>event</md-icon>
                <label>{{ $t("titles.date") }}</label>
                <md-input v-model="date" type="date"></md-input>
            </md-input-container>
        </md-list-item>
        <md-list-item>
            <md-input-container>
                <md-icon>star</md-icon>
                <label>{{ $t("titles.rating") }}</label>
                <md-input v-model="amount" type="number"></md-input>
            </md-input-container>
        </md-list-item>
        <md-list-item class="right">
            <md-button @click="update" class="md-raised md-primary">{{ $t("actions.save") }}</md-button>
        </md-list-item>
    </md-list>
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
            const date = new Date(this.date);
            date.setHours(new Date().getHours());
            date.setMinutes(new Date().getMinutes());
            const newObject = {
                date,
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

<style>
</style>
