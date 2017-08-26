<template>
  <div>
    <div class="main-date" @click="toggleDateComponent">{{date.toLocaleDateString()}}</div>
    <input class="hidden date" type="date" @change="processDate">
    <input type="hidden" v-model="habitId">
    <div>
        <input v-model="amount">
    </div>
    
    <button @click="update" class="save-button">Save</button>
  </div>
</template>

<script>
import router from '../router';
import { mapActions } from 'vuex';

const actions = mapActions([
    'incrementLog'
]);

export default {
    name: 'habitIncrement',
    data() {
        return {
            date: new Date(),
            amount: 0,
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
            router.push({ name: 'main' });
        },
        toggleDateComponent: function() {
            console.log(this.$el.querySelector('.date').click());
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
.save-button {
    position: absolute;
    bottom: 20px;
    font-size: 30px;
}
</style>
