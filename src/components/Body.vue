<template>
  <div class="body">
    <b-container v-for="section in sections" :key="section.section">
      <b-container class="section-head">
        {{ section.title }}
      </b-container>
      <b-container fluid="sm" class="section-body">
        <component v-if="section.body != null" :is="section.body"></component>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import Calendar from './Calendar.vue';
import Contact from './Contact.vue';

function createCalendarUrl() {
  const date = new Date();
  const fd = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDay = fd.toISOString().split('T')[0];
  const ld = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = ld.toISOString().split('T')[0];
  return `https://api.teamup.com/ks4dy26zrjnwhw4kz5/events?startDate=${firstDay}&endDate=${lastDay}`;
}

const sectionMap = new Map();
sectionMap.set('MITMACHEN', null);
sectionMap.set('KONTAKT', Contact);
sectionMap.set('BILDER', null);
sectionMap.set('AGENDA', Calendar);
const sections = [
  {
    section: {
      title: 'MITMACHEN',
      body: null,
    },
  },
  {
    section: {
      title: 'KONTAKT',
      body: 'Contact',
    },
  },
  {
    section: {
      title: 'BILDER',
      body: null,
    },
  },
  {
    section: {
      title: 'AGENDA',
      body: 'Calendar',
    },
  },
];

export default {
  components: { Calendar },
  name: 'Body',
  props: {},
  data() {
    return {
      sections,
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
