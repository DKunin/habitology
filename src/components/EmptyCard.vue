<template>
  <md-card v-if="visibility" class="empty-card" >
        <md-card-content>
            <div @click="onClick">
                <Icon className :size="50">
                    <IconAddCircleOutline />
                </Icon>
            </div>
        </md-card-content>
    </md-card>
</template>

<script>

export default {
    name: 'empty-card',
    props: {
        visibility: {
            type: Boolean,
            default: false
        },
        onClick: {
            type: Function,
            default: () => {}
        }
    }
};

</script>

<style scoped>
.empty-card {
    opacity: .4;
    text-align: center;
    cursor: pointer;
    box-shadow: none;
}

.empty-card.md-card .md-card-content:last-child {
    padding: 10px;
    border: 2px dashed #607d8b;
}
</style>
