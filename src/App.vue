<template>
  <CalendarContainer />
<!--  <UpVote/>-->
</template>

<script>
//import UpVote from './components/UpVote.vue'
import CalendarContainer from './components/calendar/CalendarContainer'

export default {
  name: 'App',
  components: {
    //UpVote,
    CalendarContainer
  }
}
</script>

<style>
html, body, #app{
  height:100%
}
</style>
