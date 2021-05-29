<template>
  <div class="body">
    <b-container class="section">
      <b-container class="section-head">
        MITMACHEN
      </b-container>
      <b-container fluid="sm" class="section-body">
      </b-container>
    </b-container>
    <b-container class="section">
      <b-container class="section-head">
        Kontakt
      </b-container>
      <b-container fluid="sm" class="section-body">
      </b-container>
    </b-container>
    <b-container class="section">
      <b-container class="section-head">
        AGENDA
      </b-container>
      <b-container fluid="sm" class="section-body">
        <Calendar :iCalUrl="url"/>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import Calendar from './Calendar.vue';

function createCalendarUrl() {
  const date = new Date();
  const fd = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDay = fd.toISOString().split('T')[0];
  const ld = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = ld.toISOString().split('T')[0];
  return `https://api.teamup.com/ks4dy26zrjnwhw4kz5/events?startDate=${firstDay}&endDate=${lastDay}`;
}

export default {
  components: { Calendar },
  name: 'Body',
  props: {
  },
  data() {
    return {
      sections: ['Mitmachen', 'Kontakt', 'Bilder', 'Agenda'],
      url: 'https://api.teamup.com/ks4dy26zrjnwhw4kz5/events',
    };
  },
  created() {
    this.url = createCalendarUrl();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@supports (-webkit-text-stroke: 1px black) {
  .section-head {
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: white;
  }
}
.section-head {
  font-size: 200%;
}
</style>
