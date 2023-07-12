<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <font-awesome-icon :icon="['fas', 'fa-pencil-square']" class="edit-icon"
                           @click="editEvent(day.id, event.details)"
        />
        <font-awesome-icon :icon="['fas', 'fa-trash']" class="delete-icon"/>
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" :placeholder="event.details" v-model="newEventDetails"/>
      <div class="has-text-centered icons">
        <font-awesome-icon :icon="['fas', 'fa-check']"
                           @click="updateEvent(day.id, event.details, newEventDetails)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../../store/calendar'

export default {
  name: "CalendarEvent",
  data(){
    return {
      newEventDetails: ""
    }
  },
  props: ['event', 'day', 'elemId'],
  methods:{
    editEvent(dayId, eventDetails){
      store.editEvent(dayId, eventDetails)
    },
    updateEvent(dayId, originalEventDetails, updatedEventDetails){
      if (updatedEventDetails === '') updatedEventDetails = originalEventDetails;
      store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
      this.newEventDetails = '';
    }
  },
  computed:{
    getEventBackgroundColor(){
      const colors = ['#FF9999', '#85D6FF', '#99FF99'];
      let randomColor = colors[Math.floor(Math.random() * colors.length)]
      return `background-color: ${randomColor}`
    }
  }

}
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4C4C4C;
  padding: 5px;

  .details {
    display: block;
  }

  .icons .svg-inline--fa {
    padding: 0 2px;
  }
  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #FFF;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>