<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Page msg="Welcome to Your Vue.js App"/>
    </full-page>
  </div>
</template>

<script>
import Page from './components/Page.vue';

export default {
  name: 'App',
  components: {
    Page,
  },
  data() {
    return {
      options: {
        licenseKey: process.env.VUE_APP_FULLPAGE_LICENSE,
        autoScrolling: true,
        fitToSection: true,
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
