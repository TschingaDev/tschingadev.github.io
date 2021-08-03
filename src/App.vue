<template>
  <b-container fluid id="app" class="overflow-auto">
    <b-row fluid>
      <b-col fluid id="content">
        <b-container fluid class="page" id="page-title">
          <Title/>
        </b-container>
        <b-container fluid class="page" id="page-body">
            <Body/>
        </b-container>
      </b-col>
      <b-col col="6" fluid id="logo-background" class="d-none d-lg-block"></b-col>
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
  font-family: Mittelschrift;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('./assets/tschinga_background.png');
  background-size: 300px;
}

#page-title {
  height: 25vh;
  margin: 0;
  padding: 0;
  outline: 1px solid black;
}

#page-body {
  height: 75vh;
  margin: 0;
  padding: 0;
  background-color: transparent;
}

#content {
  margin-right: 0px;
  padding: 0;
}

#logo-background {
  padding: 0;
}

@font-face {
  font-family: "Mittelschrift";
  src: local("Mittelschrift"),
   url(./fonts/Mittelschrift/alte-din-1451-mittelschrift.regular.ttf) format("truetype");
}
</style>
