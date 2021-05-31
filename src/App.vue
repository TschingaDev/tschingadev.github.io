<template>
  <div id="app">
    <div id="page-title">
      <Title/>
    </div>
    <div id="page-body">
      <Body/>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import Body from './components/Body.vue';

export default {
  name: 'App',
  components: {
    Title,
    Body,
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

#page-title {
  height: 20vh;
}

#page-body {
  height: 80vh;
}
</style>
