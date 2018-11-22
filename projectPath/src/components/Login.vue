<template>
  <div class="div1">
    <p>用户登录界面</p>
    <div>
      <group class="group">
        <x-input placeholder="用户名/ID/邮箱" v-model="user"></x-input>
        <x-input placeholder="密码" v-model="pass"></x-input>
      </group>
    </div>
    <div class="div-button">
      <x-button title="登录" @click.native="submit" type="primary">登录</x-button>
    </div>
  </div>
</template>
<script>
  import {Group, XButton, XInput} from 'vux'

  export default {
    components: {
      Group,
      XButton,
      XInput
    },
    methods: {
      submit() {
        console.log("点击登录")
      }
    },
    data() {
      return {
        user: '',
        pass: '',
      }
    }
  }

</script>
<style>
  .div1 {
    width: 30em;
    height: 40em;
    margin-left: 50em;
   background-color: darkcyan;
  }

  p {
    margin-top: 2em;
    margin-left: 10em;
    color: ;
  }

  .group {
    width: 20em;
    height: 10em;
    margin-top: 2em;
    margin-left: 5em;
  }
  .div-button{
    width: 5em;
    margin-bottom: 6em;
    margin-left:12em ;
  }


</style>
