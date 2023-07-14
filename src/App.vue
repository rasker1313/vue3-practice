<template>
    <TopMenu />
    <router-view></router-view>
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
