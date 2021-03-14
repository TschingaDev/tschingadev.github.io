<template>
    <b-container class="introduction-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dui gravida, vestibulum ipsum cursus, volutpat nisl. Vivamus eget lacinia urna. Duis rhoncus malesuada sapien quis blandit. Pellentesque justo eros, porttitor in rutrum non, fringilla et justo. Nulla congue dolor sit amet odio tempus fringilla in nec erat. Aliquam scelerisque, libero et congue sagittis, justo turpis porttitor lacus, ut auctor ligula dui vel augue. Aliquam mauris quam, pretium nec ipsum vitae, tincidunt ornare nunc. Donec viverra sollicitudin pulvinar. Proin sit amet ex odio. In at tempor purus.
    </b-container>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.introduction-text {
  width: 90%;
  font-size: 3vw;
  font-weight: 300;
  line-height: 1.3;
  padding-top: 100px;
}

@media (max-width: 768px) {
.introduction-text {
    font-size: 5vw;
  }
}
</style>
