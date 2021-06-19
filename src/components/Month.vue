<template lang="html">
  <b-container>
    <b-row>
      <b-col cols="4" class="p-0">
        <MonthTitle :month='month' :size='100'/>
      </b-col>
      <b-col cols="8" class="p-0">
        <b-container v-for='event in events' :key='event.title' class='event'>
          <Event :date='event.start_dt.split("T")[0]' :title='event.title'
          :organizer='event.who' :description='event.notes.substring(3,event.notes.length - 4)' :time='event.start_dt.split("T")[1]'/>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Event from './Event.vue';
import MonthTitle from './MonthTitle.vue';

export default {
  name: 'Month',
  components: {
    Event,
    MonthTitle,
  },
  props: {
    events: Array,
    month: String,
  },
};

</script>

<style scoped lang="scss">
.event {
  padding: 5px 0px;
}
</style>
