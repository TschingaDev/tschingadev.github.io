<template lang="html">
  <b-container fluid id="title-container" class="p-0">
    <svg
      id="circle"
      width="100%" height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg">
      <path
            d="
              M 50, 50
              m -35, 0
              a 35,35 0 1,1 70,0
              a 35,35 0 1,1 -70,0
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
              M 50, 50
              m -20, 0
              a 20,20 0 1,1 40,0
              a 20,20 0 1,1 -40,0
              "
            fill="none"
            transform="rotate(-40 50 50)"/>
      <text id="circular-text" fill="white" letter-spacing="1.5">
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
#circular-text {
  width: 100%;
}

</style>
