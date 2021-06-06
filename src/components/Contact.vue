<template lang="html">
  <b-container>
    <b-container fluid class='image-container'>
      <img src='@/assets/tschinga_mail.png' class='image'/>
    </b-container>
    <b-container class="contact">
      <p>Breitensteinstrasse 19A</p>
      <p>8037 Zürich</p>
    </b-container>
    <b-container fluid class='image-container'>
      <img src='@/assets/tschinga_tag.png' class='image'/>
    </b-container>
  </b-container>
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
p {
  margin: 0;
  padding: 0;
}
.contact {
  text-align: left;
}
.image-container {
  width: 80vw;
  padding: 0;
}
.image {
  width: 80%;
}
</style>
