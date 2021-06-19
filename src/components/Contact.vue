<template lang="html">
  <div>
    <b-container fluid class='image-container'>
      <b-img src='@/assets/tschinga_mail.png' fluid class="image-container"></b-img>
    </b-container>
    <b-container fluid class="contact p-300">
      <b-container>Breitensteinstrasse 19A</b-container>
      <b-container>8037 Zürich</b-container>
    </b-container>
    <b-container fluid class='image-container'>
      <b-img src='@/assets/tschinga_tag.png' fluid class="image-container"></b-img>
    </b-container>
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
p {
  margin: 0;
  padding: 0;
}
.contact {
  text-align: left;
  border-left: 10px;
}
.image-container {
  width: 80%;
}
</style>
