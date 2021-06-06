<template>
  <b-container fluid id="app" class="overflow-hidden">
    <b-row>
      <b-col fluid id="content">
        <div class="page" id="page-title">
          <Title/>
        </div>
        <div class="page" id="page-body">
            <Body/>
        </div>
      </b-col>
      <b-col col="6" fluid id="logo-background" class="overflow-auto d-none d-lg-block"></b-col>
    </b-row>
  </b-container>
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
  height: 100%;
  background-image: url('./assets/tschinga_background.png');
  background-size: 300px;
}

#logo-background {
}

#page-title {
  height: 20vh;
}

#page-body {
  height: 80vh;
}

.page {
  margin: 0;
  padding: 0;
}

#content {
  margin-right: 0px;
  padding: 0;
}
</style>
