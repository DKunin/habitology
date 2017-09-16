<template>
  <div class="page">

    <input type="hidden" v-model="id">
    <input type="hidden" v-model="habitId">
        <md-list class="md-single-line">
            <md-list-item v-if="false">
                <span class="md-subheading">{{showHabitName(habitId)}}</span>
            </md-list-item>
            <md-list-item>
                <md-input-container>
                    <md-icon>event</md-icon>
                    <label>Date</label>
                    <md-input v-model="date" type="date"></md-input>
                </md-input-container>
            </md-list-item>
            <md-list-item>
                <md-input-container v-if="false">
                    <md-icon>star</md-icon>
                    <label>Rating</label>
                    <md-input v-model="amount" type="number"></md-input>
                </md-input-container>
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
            </md-list-item>
            <md-list-item>
                <md-button @click="remove" class="md-raised md-accent">{{ $t("actions.remove") }}</md-button>
                <md-button @click="update" class="md-raised md-primary">{{ $t("actions.save") }}</md-button>
            </md-list-item>
        </md-list>
  </div>
</template>

<script>

import router from '../router';
import moment from 'moment';

export default {
    name: 'increment-edit',
    data() {
        return {
            amount: 0,
            date: 100,
            habitId: null,
            id: null
        };
    },
    mounted() {
        const editMode = this.$store.state.log.find(singleLog => {
            return singleLog.id === parseInt(this.$route.query.logId);
        });

        if (editMode) {
            this.$set(this, 'amount', editMode.amount);
            this.$set(this, 'id', editMode.id);
            this.$set(
                this,
                'date',
                moment(new Date(editMode.date)).format('YYYY-MM-DD')
            );
            this.$set(this, 'habitId', editMode.habitId);
        }
    },
    methods: {
        cancel() {
            router.back();
        },
        update() {
            const payload = {
                amount: this.amount,
                id: this.id,
                date: this.date,
                habitId: this.habitId
            };

            this.$store.dispatch('updateLogItem', payload);
            router.back();
        },
        remove() {
            this.$store.dispatch('removeLogItem', this.id);
            router.back();
        },
        showHabitName(id) {
            if (!id) {
                return '-';
            }
            return this.$store.state.habits[id].name;
        }
    }
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
