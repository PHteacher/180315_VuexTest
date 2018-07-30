<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      search () {
        if(this.searchName) {
          // 触发action调用请求后台接口
          this.$store.dispatch('search', this.searchName)
        }
      }
    }
  }
</script>

<style>

</style>