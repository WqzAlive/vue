<!--
<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="customerService">
    <hover-button :logg="true"></hover-button>
    <div class="index-header information-title">
      <h1>车险帮 <img style="height: 3rem;margin-top: -0.5rem;" src="../../../static/img/carinsurance/carbanner0102.png" alt=""></h1>
    </div>
    <div class="information-item item-color " v-on:click="carInsuranceDetail">
      <img src="../../../static/img/carinsurance/car01.png" class="icon">
      <span class="font-xl">车险帮介绍</span>
    </div>
    <div class="information-item item-color" v-on:click="salesPromotion">
      <img src="../../../static/img/carinsurance/car0202.png" class="icon">
      <span class="font-xl">车主活动</span>
    </div>
    <div class="information-item item-color" v-on:click="smallInsurancece">
      <img src="../../../static/img/carinsurance/car0303.png" class="icon">
      <span class="font-xl">小险种</span>
    </div>
    <div class="information-item item-color" v-on:click="insuranceTips">
      <img src="../../../static/img/carinsurance/car0402.png" class="icon">
      <span class="font-xl">保险小贴士</span>
    </div>
   &lt;!&ndash; <div class="bannerItem"></div>
    <group style="color: black;">
      <cell title="车险帮介绍"  @click.native="showPlugin">
        <img slot="icon" width="20" style="display:block;margin-right:20px;" src="">
      </cell>
      <cell title="小险种" @click.native="showPlugin2" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:20px;" src="">
      </cell>
      <cell title="促销活动" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:20px;" src="">
      </cell>
      <cell title="保险小贴士" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:20px;" src="">
      </cell>
    </group>&ndash;&gt;
  </div>
</template>

<script>
  import { Group, Cell, Confirm, TransferDomDirective as TransferDom } from 'vux'
  import HoverButton from "../customer-service/HoverButton"
  export default {
    directives: {
      TransferDom
    },
    components: {
        HoverButton,
        Group,
      Cell,
      Confirm
    },
    return: {
      show: false

    },
    methods:  {
        carInsuranceDetail (){
            this.$router.push({ name: '车险帮'})
        },
        smallInsurancece(){
            this.$router.push({ name: '小险种'})
        },
        salesPromotion(){
            this.$router.push({ name: '促销活动'})
        },
        insuranceTips (){
            this.$router.push({ name: '保险小贴士'})
        },
        xuanfuchu: function () {
            this.fus = false
            this.fus1 = true
        },
    }
  }
</script>

<style  scoped>
  .item-color{
    color: #4D95C8;
 /*   height: 3rem;*/
  }
</style>
-->
