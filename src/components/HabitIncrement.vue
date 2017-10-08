<template>
  <div class="page">
    <input type="hidden" v-model="habitId">
    <md-list class="md-single-line">
        <md-list-item v-if="false">
            <span class="md-subheading">{{showHabitName(habitId)}}</span>
        </md-list-item>
        <md-list-item>
            <md-input-container>
                <Icon>
                    <IconEvent />
                </Icon>
                <label>{{ $t("titles.date") }}</label>
                <md-input v-model="date" type="datetime-local"></md-input>
            </md-input-container>
        </md-list-item>
        <md-list-item>
            <div class="radio-holder">
              <md-radio v-model="amount" name="amount" md-value="1">1</md-radio>
              <md-radio v-model="amount" name="amount" md-value="2">2</md-radio>
              <md-radio v-model="amount" name="amount" md-value="3">3</md-radio>
              <md-radio v-model="amount" name="amount" md-value="4">4</md-radio>
              <md-radio v-model="amount" name="amount" md-value="5">5</md-radio>
              <md-radio v-model="amount" name="amount" md-value="6">6</md-radio>
              <md-radio v-model="amount" name="amount" md-value="7">7</md-radio>
              <md-radio v-model="amount" name="amount" md-value="8">8</md-radio>
              <md-radio v-model="amount" name="amount" md-value="9">9</md-radio>
              <md-radio v-model="amount" name="amount" md-value="10">10</md-radio>
            </div>
            <md-list-item v-if="false">
                <md-button @click="update" class="md-raised md-primary">{{ $t("actions.save") }}</md-button>
            </md-list-item>
        </md-list-item>
    </md-list>
  </div>
</template>

<script>

import router from '../router';
import { mapActions } from 'vuex';
import moment from 'moment';

const actions = mapActions(['incrementLog']);

export default {
    name: 'habitIncrement',
    data() {
        return {
            date: moment().format('YYYY-MM-DDTHH:mm'),
            amount: null,
            habitId: this.$route.params.habitId
        };
    },
    watch: {
        amount() {
            this.update();
        }
    },
    methods: Object.assign(actions, {
        update() {
            const date = new Date(this.date);
            const newObject = {
                date,
                amount: parseInt(this.amount || 0),
                habitId: parseInt(this.habitId)
            };
            this.incrementLog(newObject);
            if (window.navigator) {
                window.navigator.vibrate(100, 50);
            }
            router.replace({ name: 'main' });
        },
        formatDate(dateTime) {
            return moment(dateTime).format('DD.MM.YY');
        },
        cancel: function() {
            router.replace({ name: 'main' });
        },
        showHabitName: function(id) {
            return this.$store.state.habits[id].name;
        }
    })
};

</script>

<style scoped>
.radio-holder {
    width: 100%;
}
.md-radio {
    display: flex;
}
.md-radio .md-radio-label {
    width: 100%;
}
</style>
