<template>
  <b-container fluid id="title-wrapper">
    <b-container fluid id="title">
      TSCHINGA
    </b-container>
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
#title-wrapper {
  height: 100%;
  position: relative;
  padding: 0px 0px 1px 0px;
}
#title {
  height: 100%;
  color:#ffffff;
  background-color: black;
  font-size: 300%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#title-logo {
  position: absolute;
  top: 70%;
  left: 3%;
  height: 80%;
  z-index: 10;
}
</style>
