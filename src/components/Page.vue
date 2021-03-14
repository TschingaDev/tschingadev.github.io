<template>
  <div>
    <div class="section">
      <b-container fluid="sm" id="logo">
        <img class="img-fluid" alt="Tschinga logo" src="../assets/logo.png"/>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'Page',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#logo {
  max-width: 500px;
}
</style>
