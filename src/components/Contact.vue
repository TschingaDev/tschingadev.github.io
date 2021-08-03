<template lang="html">
  <div id='contact-container'>
    <a href="mailto:info@tschinga.ch">
      <b-img src='@/assets/tschinga_mail.png' fluid id="mail-graphic"></b-img>
    </a>
    <b-container fluid class="contact">
      <b-container><p>Breitensteinstrasse 19A</p></b-container>
      <b-container><p>8037 Zürich</p></b-container>
    </b-container>
    <a href="https://www.instagram.com/tschinga_wipkingen/">
      <b-img src='@/assets/tschinga_tag.png' fluid id="tag-graphic"></b-img>
    </a>
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
  grid-template-columns: 15% auto 15%;
  grid-template-rows: 90px auto 90px;
}

p {
  font-family: 'Frank Ruhl';
  font-size: 19px;
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
  width: 50%;
  max-height: 85px;
  max-width: 250px;
  z-index: 10;
  grid-column: 1 / 3;
  grid-row: 1;
}

#tag-graphic {
  position: absolute;
  top: 10%;
  left: 50%;
  width: 60%;
  max-width: 300px;
  max-height: 85px;
  z-index: 10;
  grid-column: 1 / 3;
  grid-row: 3;
}
</style>
