<template>
  <div id="app">
    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamp</strong>
        </div>
      </div>
      <InputComponent />
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/note-list/InputComponent'
export default {
  name: "NoteListVuex",
  components:{
    InputComponent
  }
}
</script>

<style scoped>

</style>