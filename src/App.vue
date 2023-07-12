<template>
  <div id="app">
    <TopMenu />
    <router-view></router-view>
  </div>
<!--  <UpVote/>-->
</template>

<script>
import TopMenu from './components/TopMenu.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
  }
}
</script>

<style>
html, body, #app{
  height:100%
}
</style>
