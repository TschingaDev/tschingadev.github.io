<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">First section ...
        <img alt="Tschinga logo" src="../assets/logo.png" height="500px">
        <Introduction />
      </div>
    </full-page>
  </div>
</template>

<script>
import Introduction from './Introduction.vue';

export default {
  components: { Introduction },
  name: 'Page',
  props: {
    msg: String,
  },
  data() {
    return {
      options: {
        licenseKey: process.env.FULLPAGE_LICENSE,
      },
    };
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
</style>
