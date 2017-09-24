<template>
    <div class="page">
        <div class="logoholder">
            <Logo :size="100" color="#222"/>
        </div>
        <div class="links">

            <div><md-button class="md-raised md-dense" :href="github" target="_blank">Github</md-button></div>
            <div><md-button class="md-raised md-dense" href="http://dkunin.github.io" target="_blank">By: DKunin</md-button></div>
        </div>
        <div class="version">{{ version }}</div>
    </div>
</template>

<script>

import packageJson from '../../package.json';
import Logo from '@/components/Logo';

export default {
    name: 'about',
    components: {
        Logo
    },
    data() {
        return {
            version: packageJson.version,
            github: packageJson.github,
            author: packageJson.author
        };
    },
    methods: {
    }
};

</script>

<style scoped>
.page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.md-raised {
    background-color: white;
}
.links {
    padding: 20px 0;
    text-align: center;
}
.logoholder {
    background-color: #fff;
    padding: 40px;
    border-radius: 50%;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
}
.version {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    opacity: .3;
}
</style>
