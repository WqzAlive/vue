<template>
  <div>
    <div>
      <img src="../../static/image/carInsurance.jpg" class="style-img1"/>
    </div>
    <div class="div2" v-on:click="carhome1">
      <img src="../../static/image/car01.png" class="style-img2"/>
      <p class="style-p">车险帮介绍</p>
    </div>
    <div class="div2" v-on:click="carhome2">
      <img src="../../static/image/car0202.jpg" class="style-img2"/>
      <p class="style-p">车主活动</p>
    </div>
    <div class="div2" v-on:click="carhome3">
      <img src="../../static/image/car0303.png" class="style-img2"/>
      <p class="style-p">小险种</p>
    </div>
    <div class="div2" v-on:click="carhome4">
      <img src="../../static/image/car0402.png" class="style-img2"/>
      <p class="style-p">保险小贴士</p>
    </div>
  </div>
</template>
<script>
  import { XImg } from 'vux'

  export default {
    components: {
      XImg
    },
    data () {
      return {}

    },
    methods: {
      carhome1 () {
        console.log('点击事件1')
      },
      carhome2 () {
        console.log('点击事件2')
      },
      carhome3 () {
        console.log('点击事件3')
        this.$router.push({name:'保险'})
      },
      carhome4 () {
        console.log('点击事件4')
        this.$router.push({name:'保险小贴士'})
      }
    }
  }

</script>
<style>

  .div2 {
    width: 100%;
    height: 4em;
    position: relative;

  }

  .style-img1 {
    width: 100%;
  }

  .style-img2 {
    position: absolute;
    left: 2em;
    width: 2.5rem;

  }

  .style-p {
    font-size: 20px;
    position: absolute;
    left: 4.5em;
    top: 0.1em;
  }

</style>
