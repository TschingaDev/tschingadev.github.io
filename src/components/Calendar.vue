<template>
  <b-container fluid class="p-0">
    <b-container fluid v-for="parsedEvents in monthlyEvents" :key="parsedEvents.month" class="p-0 month">
      <Month :events='parsedEvents.events' :month='parsedEvents.month'/>
    </b-container>
  </b-container>
</template>

<script>
import Month from './Month.vue';

export default {
  name: 'Calendar',
  components: {
    Month,
  },
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
              console.log(data.events);
            });
        },
      )
      .catch((err) => {
        console.log('Could not get ', err);
      });
  },
  computed: {
    monthlyEvents() {
      const parsedEvents = [];
      this.events.forEach((event) => {
        const month = this.parseMonth(event.start_dt);
        if (parsedEvents.length === 0 || month !== parsedEvents[parsedEvents.length - 1].month) {
          parsedEvents.push({ month, events: [] });
        }
        parsedEvents[parsedEvents.length - 1].events.push(event);
      });
      console.log(parsedEvents);
      return parsedEvents;
    },
  },
  methods: {
    parseMonth(date) {
      const dayOfWeek = new Date(date).getMonth();
      return Number.isNaN(dayOfWeek) ? null
        : ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'][dayOfWeek];
    },
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
  .month {
    outline: 1px solid black;
  }
}
</style>
