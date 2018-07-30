<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{totalSize}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="clearAllComplete">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {

    computed: {

      ...mapGetters(['totalSize', 'completeSize', 'isAllCheck']),
      /*totalSize () {
        return this.$store.getters.totalSize
      },
      completeSize () {
        return this.$store.getters.completeSize
      },

      isAllCheck () {
        return this.$store.getters.isAllCheck
      },*/


      checkAll: {
        get () {
          return this.isAllCheck
        },

        set (value) { // value是boolean值
          // this.selectAll(value)
          this.$store.dispatch('selectAll', value)
        }
      }
    },

    methods: {
      clearAllComplete () {
        this.$store.dispatch('clearAllComplete')
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>