<template>
  <div>
  <div>
    <!-- v-on :click.stop 阻止单击事件继续传播-->
    <!-- v-on :click. prevent 提交事件不在重载页面-->
    <!-- v-on :click.stop. capture 修饰符可以串联-->
    <!-- v-on :click.capture 添加事件监听器使用事件捕获模式，即元素自身触发事件现在次处理，然后才提交由内部元素进行处理-->
    <!-- v-on :click.self 只当event.target 是当前元素时触发处理函数，-->
    <button v-on:click="Click('submit ,')">submit</button><br/>

    <input v-model="message" placeholder="edit me "/>
    <p>{{message}}</p>
    <span>multiline message is :</span>
    <p style="white-space: pre-line">{{messages}}</p>
    <textarea v-model="messages " placeholder="add multiline lines"></textarea>

  </div>





  </div>
</template>
<script>
  export  default {

    data(){
     return{
       message : '',
       messages: '',
     }
    },
    methods:{

      Click( message ){
        if (event)event.preventDefault()
        alert(message)
      }
    }

  }
</script>
<style>

</style>
