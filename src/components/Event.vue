<template lang="html">
  <b-container class='event'>
    <p id='date'> {{ dayOfWeek }} {{ parsedDate }}</p>
    <p id='title'> {{ title }} </p>
    <p id='organizer'> von {{ organizer }} </p>
    <p id='description'> {{ description }} </p>
    <p id='time' v-if='!all_day'> {{ time }} </p>
  </b-container>
</template>

<script lang="js">

export default {
  name: 'event',
  props: {
    date: String,
    title: String,
    description: String,
    time: String,
    organizer: String,
    all_day: Boolean,
  },
  mounted() {

  },
  data() {
    return {

    };
  },
  computed: {
    dayOfWeek() {
      const dayOfWeek = new Date(this.date).getDay();
      return Number.isNaN(dayOfWeek) ? null
        : ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'][dayOfWeek];
    },
    parsedDate() {
      return this.date.split('-').join('.');
    },
  },
};

</script>

<style scoped lang="scss">
  .event {
    text-align: left;
    padding: 0px;
  }
  #date {
    font-family: 'Helvetica';
    font-size: 90%;
    margin: 0px;
  }
  #title {
    font-family: 'Helvetica';
    font-size: 120%;
    font-weight: bold;
    margin: 0px;
    padding-bottom: 3px;
    line-height: 100%;
  }
  #organizer {
    font-family: 'Frank Ruhl';
    margin: 0px;
    line-height: 100%;
    font-style: italic;
  }
  #description {
    font-family: 'Frank Ruhl';
    margin: 0px;
    line-height: 100%;
    padding-block: 3px;
  }
  #time {
    font-family: 'Frank Ruhl';
    margin: 0px;
  }
</style>
