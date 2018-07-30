<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <List/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import List from './components/list.vue'
  import Footer from './components/footer.vue'

  export default {
    components: {
      TodoHeader: Header,
      List,
      TodoFooter: Footer
    }
  }
</script>


<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>