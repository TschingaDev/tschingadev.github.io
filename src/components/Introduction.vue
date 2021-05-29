<template>
    <b-container class="introduction-text">
        {{ text }}
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
      text: introText,
    };
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
