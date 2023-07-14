<template>
  <div class="container">
    <input placeholder='Enter a note' class="input is-small" type="text"
           v-model="input"
           @keyup.enter="monitorEnterKey"
    />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      input: ''
    }
  },
  methods:{
    monitorEnterKey(){
      this.$store.dispatch('addNote', this.input);
      this.$store.dispatch('addTimestamp', new Date().toLocaleString())
      this.input = '';
    }
  }
}
</script>

<style scoped>

</style>