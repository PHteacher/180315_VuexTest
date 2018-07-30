<template>
  <div class="container">
    <Search/>
    <users-main/>
  </div>
</template>

<script>
  import axios from 'axios'
  import Search from './components/search.vue'
  import Main from './components/main.vue'

  export default {

    components: {
      Search,
      'users-main': Main
    }
  }
</script>


<style>

</style>