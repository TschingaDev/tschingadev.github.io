<template lang="html">
  <b-container fluid id="title-container" class="p-0">
    <svg
      id="circle"
      width="100%" height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg">
      <path
            d="
              M 50, 60
              m -40, 0
              a 40,40 0 1,1 80,0
              a 40,40 0 1,1 -80,0
              "
            fill="red"/>
    </svg>
    <svg
      id="circ-text"
      class="svg"
      width="100%" height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg">
      <path id="circlePath"
            d="
              M 50, 60
              m -25, 0
              a 25,25 0 1,1 50,0
              a 25,25 0 1,1 -50,0
              "
            fill="none"
            transform="rotate(-10 50 60)"/>
      <text width="100%">
        <textPath xlink:href='#circlePath'>
          {{ month }}
        </textPath>
      </text>
    </svg>
  </b-container>
</template>

<script>

export default {
  name: 'MonthTitle',
  components: {
  },
  props: {
    month: String,
    size: Number,
  },
};

</script>

<style scoped lang="scss">
#title-container {
  position: relative;
}
.svg {
  position: absolute;
  top: 0;
  left: 0;
}

</style>
