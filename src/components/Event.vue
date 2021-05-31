<template lang="html">
  <b-container class='event'>
    <p id='date'> {{ dayOfWeek }} {{ parsedDate }}</p>
    <p id='title'> {{ title }} </p>
    <p id='organizer'> von {{ organizer }} </p>
    <p id='description'> {{ description }} </p>
    <p id='time'> {{ time }} </p>
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
    font-size: 90%;
    margin: 0px;
  }
  #title {
    font-size: 120%;
    font-weight: bold;
    margin: 0px;
    padding-bottom: 3px;
    line-height: 100%;
  }
  #organizer {
    margin: 0px;
    line-height: 100%;
    font-style: italic;
  }
  #description {
    margin: 0px;
    line-height: 100%;
    padding-block: 2px;
  }
  #time {
    margin: 0px;
  }
</style>
