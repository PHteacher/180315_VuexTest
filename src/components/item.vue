<template>
  <li :style="{background: bgColor}"
      @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,  // 指定属性名和属性值的类型
      index: Number
    },

    data () {
      return {
        isShow: false,
        bgColor: 'white'
      }
    },

    methods: {
      handleEnter (isEnter) {
        if(isEnter) { // 进入
          this.isShow = true
          this.bgColor = '#aaaaaa'
        } else { // 离开
          this.isShow = false
          this.bgColor = '#ffffff'
        }
      },

      deleteItem () {
        if(window.confirm('确认删除吗?')) {
          // this.deleteTodo(this.index)
          this.$store.dispatch('deleteTodo', this.index)
        }
      }
    }
  }
</script>

<style>

</style>