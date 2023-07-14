<template>
  <div class="note-count">
    Note count: <strong>{{ noteCount }}</strong>
  </div>
</template>

<script>
export default {
  name: "noteCountComponent",
  computed:{
    noteCount(){
      return this.$store.getters.getNoteCount;
    }
  }
}
</script>

<style scoped>
.note-count{
  text-align: center;
}
</style>