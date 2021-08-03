<template>
  <b-container fluid id="banner">
    <div id="title-container">
      <svg id="title" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="50%">TSCHINGA</text>
      </svg>
    </div>
    <b-img src='@/assets/tschinga_small_logo.png' fluid id="title-logo"></b-img>
  </b-container>
</template>

<script>
export default {
  name: 'Title',
  props: {
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banner {
  height: 100%;
  width: 100%;
  background-color: black;
  position: relative;
  padding: 0px;
}
#title-container {
  margin: auto;
  width: 100%;
  height: 100%;
}
#title {
  width: 100%;
  height: 100%;
}
text {
  text-anchor: middle;
  font-size: 80px;
  transform: translate(0px, 25px);
  letter-spacing: 0.1em;
  fill: white;
}
#title-logo {
  position: absolute;
  top: 70%;
  left: 3%;
  height: 60%;
  z-index: 10;
}
</style>
