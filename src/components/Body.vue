<template>
  <div>
    <b-container fluid v-for="(section, index) in sections" :key="section.title" class="section p-0">
      <b-container fluid v-b-toggle='"collapsable-" + index' class="section-head">
        {{ section.title }}
      </b-container>
      <b-collapse v-bind:id='"collapsable-" + index' class="section-body">
        <component
          v-if='section.body != null'
          :is='section.body'
          v-bind:[section.prop.name]='section.prop.value'
        ></component>
      </b-collapse>
    </b-container>
  </div>
</template>

<script>
import Calendar from './Calendar.vue';
import Contact from './Contact.vue';
import Introduction from './Introduction.vue';
import ImageGallery from './ImageGallery.vue';

function createCalendarUrl() {
  const date = new Date();
  const fd = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDay = fd.toISOString().split('T')[0];
  const ld = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = ld.toISOString().split('T')[0];
  return `https://api.teamup.com/ks4dy26zrjnwhw4kz5/events?startDate=${firstDay}&endDate=${lastDay}`;
}

const sections = [
  {
    title: 'MITMACHEN',
    body: 'Introduction',
    prop: {},
  },
  {
    title: 'KONTAKT',
    body: 'Contact',
    prop: {},
  },
  {
    title: 'BILDER',
    body: 'ImageGallery',
    prop: {},
  },
  {
    title: 'AGENDA',
    body: 'Calendar',
    prop: {
      name: 'iCalUrl',
      value: createCalendarUrl(),
    },
  },
];

export default {
  components: {
    Calendar,
    Contact,
    Introduction,
    ImageGallery,
  },
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
  .section-head.not-collapsed {
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: white;
  }
  .section-head.collapsed {
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: black;
  }
}
.section-head {
  font-size: 200%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-head.not-collapsed {
  outline: 1px solid black;
}

.section-head.collapsed {
  outline: 1px solid white;
  background-color: black;
}

.section-body {
  outline: 1px solid black;
}
</style>
