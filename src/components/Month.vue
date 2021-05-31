<template lang="html">
  <b-container>
    <b-media>
      <template #aside>
        <div class="curved-text">June</div>
      </template>
      <b-container v-for='event in events' :key='event.title' class='event'>
        <Event :date='event.start_dt.split("T")[0]' :title='event.title'
        :organizer='event.who' :description='event.notes.substring(3,event.notes.length - 4)' :time='event.start_dt.split("T")[1]'/>
      </b-container>
    </b-media>
  </b-container>
</template>

<script>
import Event from './Event.vue';

export default {
  name: 'Month',
  components: {
    Event,
  },
  props: {
    events: [],
  },
};

</script>

<style scoped lang="scss">
.event {
  padding-block: 5px;
}
</style>
