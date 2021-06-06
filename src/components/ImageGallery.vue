<template lang="html">
  <b-container class='p-0'>
    <b-container fluid class='image-container'>
      <b-img fluid src='@/assets/tschinga-foto-1.jpg' class='image'/>
    </b-container>
    <b-container fluid class='image-container'>
      <b-img fluid src='@/assets/tschinga-foto-2.jpg' class='image'/>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'ImageGallery',
  components: {},
  props: {
    events: [],
  },
  created() {
  },
};

</script>

<style scoped lang="scss">
.image-container {
  padding: 0;
}
.image {
  width: 100%;
}
</style>
