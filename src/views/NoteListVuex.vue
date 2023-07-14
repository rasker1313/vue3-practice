<template>
  <div id="app">
    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="(note, key) in notes" :key="key" class="notes">
            {{ note }}
          </div>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamp</strong>
          <div v-for="(timestamp, key) in timestamps" :key="key" class="timestamps">
            {{ timestamp }}
          </div>
        </div>
      </div>
      <InputComponent />
      <NoteCountComponent />
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/note-list/InputComponent'
import NoteCountComponent from '@/components/note-list/NoteCountComponent'

export default {
  name: "NoteListVuex",
  components:{
    InputComponent,
    NoteCountComponent
  },
  computed:{
    notes(){
      return this.$store.getters.getNotes;
    },
    timestamps(){
      return this.$store.getters.getTimestamps;
    }
  },
}
</script>

<style scoped>

</style>