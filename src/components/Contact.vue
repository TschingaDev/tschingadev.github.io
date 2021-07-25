<template lang="html">
  <div id='contact-container'>
    <b-img src='@/assets/tschinga_mail.png' fluid id="mail-graphic"></b-img>
    <b-container fluid class="contact p-300">
      <b-container>Breitensteinstrasse 19A</b-container>
      <b-container>8037 Zürich</b-container>
    </b-container>
    <b-img src='@/assets/tschinga_tag.png' fluid id="tag-graphic"></b-img>
  </div>
</template>

<script>
export default {
  name: 'contact',
  props: [],
  mounted() {

  },
  data() {
    return {

    };
  },
};

</script>

<style scoped lang="scss">
#contact-container {
  position: relative;
  display: grid;
  grid-template-columns: 20% auto 20%;
  grid-template-rows: 100px auto 100px;
}

p {
  margin: 0;
  padding: 0;
}

.contact {
  text-align: left;
  grid-column: 2;
  grid-row: 2;
}

#mail-graphic {
  position: absolute;
  left: 10%;
  top: 5%;
  width: 60%;
  max-height: 100px;
  z-index: 10;
  grid-column: 1 / 3;
  grid-row: 1;
}

#tag-graphic {
  position: absolute;
  top: 10%;
  left: 50%;
  width: 60%;
  max-height: 100px;
  z-index: 10;
  grid-column: 1 / 3;
  grid-row: 3;
}
</style>
