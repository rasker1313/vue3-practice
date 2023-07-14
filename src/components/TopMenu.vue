<template>
  <div class="top-menu">
    <div class="container">
      <router-link to="/">Home</router-link>
      <router-link to="/upvote">Upvote</router-link>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/note-list">Note List</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu"
}
</script>

<style lang="scss" scoped>
.top-menu{
  padding:20px 0;
  border-bottom: 2px solid darkblue;
  .container{
    a{
      text-transform: uppercase;
      margin-right: 10px;
      color: midnightblue;

      &:last-child{
        margin-right: 0;
      }
      &:hover{
        transition: 300ms;
        color: deepskyblue;
      }
    }
  }
}

</style>