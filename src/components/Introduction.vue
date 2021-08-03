<template>
    <b-container class="introduction-text">
      <p v-for='paragraph in text' :key='paragraph' class='m-0'>
        {{ paragraph }}
      </p>
    </b-container>
</template>

<script>
import introText from '../assets/introduction.txt';

export default {
  name: 'Introduction',
  props: {
  },
  data() {
    return {
      text: introText.split('\n\n'),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  font-family: 'Frank Ruhl';
  font-size: 19px;
  padding-block: 3px;
}

.introduction-text {
  width: 90%;
  text-align: left;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
