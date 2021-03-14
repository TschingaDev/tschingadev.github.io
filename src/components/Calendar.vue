<template>
    <b-container class="calendar">
      <b-container class="calendar-date">
        Montag 15.01.21
      </b-container>
      <b-container class="calendar-entry">
        Tolle Veranstaltung
      </b-container>
    </b-container>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.calendar-date {
  width: 90%;
  font-size: 5vw;
  font-weight: 400;
  line-height: 1.3;
}

.calendar-entry {
  width: 80%;
  font-size: 4vw;
  font-weight: 300;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .calendar-date {
    font-size: 7vw;
  }

  .calendar-entry {
    font-size: 6vw;
  }
}
</style>
