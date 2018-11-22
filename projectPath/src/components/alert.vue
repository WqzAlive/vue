<template>
  <div id="demo">
    <div class="button">
      <group>
        <calendar title="基本使用" v-model="demo1" disable-past placeholder="placeholder" @on-show="show"
                  @on-hide="hide"></calendar>
      </group>
      <x-button type="primary" @click.native="readonly =! readonly"> readonly</x-button>
      <group>
        <calendar title="设置时间为今天" v-model="demo2" disable-past></calendar>
      </group>
      <group>
        <calendar title="禁止选择未来的时间" v-model="demo3" @on-change="change" disable-future></calendar>
      </group>
      <group>
        <calendar v-model="demo4" title="显示popup头部" @on-change="change" show-popup-header  popup-header-title="请选择日期" disable-future></calendar>
      </group>
      <group>
        <calendar v-model="demo5" title="多选" @on-change="change"  popup-header-title="请选择日期"  placeholder="placeholder" ></calendar>
      </group>

      <group>
        <calendar v-model="demo6" title="格式化表单值" placeholder="请选择日期" popup-header-title="请选择日期"   :display-format="displayFormat" disable-weekend></calendar>
        <cell-box align-items="flex-start">
          <span class="selected-days">value</span>
          <div  class="span">
            <badge v-for="day in demo6" :text="day" :key="day" style="margin-right: 10px;"></badge>
          </div>
        </cell-box>
      </group>

    </div>
  </div>
</template>
<script>
  import {Calendar, Group ,XButton,CellBox,Badge} from 'vux'

  export default {

    components: {
      Calendar,
      Group,
      XButton,
      CellBox,
      Badge
    },
    data() {
      return {
        readonly: false,
        demo1: '',
        demo2: 'TODAY',
        demo3: 'TODAY',
        demo4: 'TODAY',
        demo5: [],
        demo6: [],
        displayFormat(value, type) {

          if (type == 'string') {
            return value
          } else {
            return value.length ? (value.length + 'days') : ''
          }
        }
      }
    },
    methods: {
      change() {
        console.log("值发生改变")
      },
      show() {
        console.log("弹窗显示时触发")
      },
      hide() {
        console.log("弹出关闭时触发")
      }
    }


  }

</script>
<style>
  .button {
    margin-left: 30%;
    width: 25em;
    height: 50em;

  }
  .selected-days{
    color: #999;
    width: 20px;
  }
  .span{
    margin-left: 40px;
  }




</style>
