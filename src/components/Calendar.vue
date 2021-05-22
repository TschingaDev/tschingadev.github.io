<template>
    <b-container class="calendar">
      <ul id="example-1">
        <li v-for="event in events" :key="event.title">
          {{ event.start_dt.split('T')[0] }} : {{ event.title }}
        </li>
      </ul>
    </b-container>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    iCalUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    fetch(this.iCalUrl, {
      method: 'GET',
      headers: {
        'Teamup-Token': process.env.VUE_APP_TEAMUP_API_KEY,
      },
    })
      .then(
        (response) => {
          // Examine the text in the response
          response.json()
            .then((data) => {
              this.events = data.events;
            });
        },
      )
      .catch((err) => {
        console.log('Could not get ', err);
      });
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
