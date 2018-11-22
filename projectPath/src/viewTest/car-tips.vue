<template>
  <div class="div1">
    <div>
      <img src="../../static/image/cartips.jpg" class="img-style"/>
    </div>
    <div class="div2" v-for=" list in imgs">
      <img :src="list.url" class="img-style"/>
    <button v-on:click="btnclick" class="div-btn" >可了解详情</button>
    </div>
  </div>
</template>
<script>

  export default {
    components: {

    },
    data () {
      return {
        imgs: [],
      }
    },
    mounted () {
      this.imagesRequest()
    },

    methods: {
      imagesRequest () {
        this.imgs = [
          {
            url: '../../static/image/cartip2.jpg',
            id: 1
          },
          {
            url: '../../static/image/cartip2.jpg',
            id: 2
          },
          {
            url: '../../static/image/cartip2.jpg',
            id: 3
          },
          {
            url: '../../static/image/cartip2.jpg',
            id: 3
          },

        ]

      },
      btnclick(){
        console.log("点击事件")
      }
    }
  }
</script>
<style>
  .div1{
    width: 100%;
  }

  .div2 {
    position: relative;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8px;
    border: solid;
    border-color: #D8D8D8;
    padding:6px 6px 0px  6px;
    border-width: 1px 1px 1px 1px;

  }

  .img-style {
    width: 100%;

  }
  .div-btn{
    width: 28%;
    position: absolute;
    bottom: 1.8rem;
    right: 2rem;
    color: #FFFAFF;
    background-color: #00BFFF;
    border:2px solid;
    border-radius:25px;
    -moz-border-radius:25px;
  }

</style>
