<template>
    <i :class="className">
        <svg xmlns="http://www.w3.org/2000/svg" :width="size + 'px'" :height="size + 'px'" :viewBox="'0 0 ' + viewport + ' ' + viewport">
            <slot/>
        </svg>
    </i>
</template>

<script>

export default {
    name: 'Icon',
    props: {
        color: {
            type: String,
            default: '#fff'
        },
        size: {
            type: Number,
            default: 24
        },
        className: {
            type: String,
            default: 'md-icon'
        }
    },
    computed: {
        viewport() {
            if (this.className.includes('md-icon')) {
                return this.size;
            }
            return this.size / 2;
        }
    }
};

</script>

<style scoped>

</style>
