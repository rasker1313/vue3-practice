<template>
  <div class="calendar-container">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from './CalendarWeek'
import CalendarEntry from './CalendarEntry'
export default {
  name: "CalendarContainer",
  components:{
    CalendarWeek,
    CalendarEntry
  }
}
</script>

<style scoped>
.calendar-container{
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  height: 100%;
}
</style>