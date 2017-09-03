<template>
  <div class="page">
    <div class="md-title">Edit log item</div>
    <span class="md-subheading">{{showHabitName(habitId)}}</span>
    <input type="hidden" v-model="id">
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
        <md-button @click="remove" class="md-raised md-accent">Remove</md-button>
    </div>
  </div>
</template>

<script>
import router from '../router';
import fecha from 'fecha';

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
            this.$set(this, 'date', fecha.format(new Date(editMode.date), 'YYYY-MM-DD'));
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
