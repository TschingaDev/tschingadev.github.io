<template>
  <div id="app">
    <div id="title">
      <Title/>
    </div>
    <div id="body">
      <Body/>
    </div>
  </div>
</template>

<script>
import Body from './components/Body.vue';
import Title from './components/Title.vue';

export default {
  name: 'App',
  components: {
    Body,
    Title,
  },
  data() {
    return {
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
}
</style>
