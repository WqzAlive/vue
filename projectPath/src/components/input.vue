<template>
  <div class="div1">
    <div>
      <group title="禁止内置验证及显示成功或者错误样式">
        <x-input title="禁止验证" placeholder=" I m placeholder"  novalidate :icon-type="iconType" :show-clear="false" @on-blur="onblur"
                 placeholder-align="right"></x-input>
      </group>
    </div>
    <div class="xbutton">
      <x-button @click.native="iconType = 'success'" type="primary">set success</x-button>
      <x-button @click.native="iconType = 'error'" type="primary">set error</x-button>
      <x-button @click.native="iconType = ''" type="primary">set empary</x-button>
    </div>
    <div>
      <group title="is-type传入funtion">
        <x-input title="必须输入2555" placeholder="I am placeholder" :is-type="be2555"></x-input>
      </group>
    </div>
    <div>
      <group title="mask">
        <x-input title="手机号码格式化" mask="999 9999 9999" v-model="maskValue" :max="13" is-type="china-mobile"></x-input>
        <cell title="value" :value="maskValue"></cell>
        <x-input title="(99) 9-99" v-model="maskValue2" :max="13"></x-input>
      </group>
    </div>
    <div>
      <group title="验证码">
        <x-input title="验证码">
          <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">

        </x-input>
        <x-input title="发送验证码" class="weui-vcode">
          <x-button slot="right" type="primary" mini>发送验证码</x-button>
        </x-input>
      </group>
    </div>

  </div>
</template>
<script>
  import {XButton, Group, XInput,Cell} from 'vux'

  export default {
    components: {
      XButton,
      Group,
      XInput,
      Cell
    },
    methods: {
      onblur() {

      }

    },
    data() {
      return {
        iconType: '',
        be2555: function (value) {
          return{
            valid: value === '255',
            msg: 'Must be 2555'
          }
        },
        maxValue:'',
        maskValue:'13545678789',
        maskValue2:'',
      }
    }


  }

</script>
<style>
  .div1 {
    width: 40em;
    height: 100em;
    margin-left: 30em;

  }
  .xbutton{
    width: 20em;
    height: 10em;
    margin-left: 5em;
  }


  .red {
    color: red;
  }

  .green {
    color: green;
  }


</style>
