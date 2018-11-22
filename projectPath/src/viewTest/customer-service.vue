<template>
  <div>
    <div>
      <x-img default-src="../../static/image/1.png" class="x-img"></x-img>
    </div>
    <div v-for="item in imgs" :key="item.id" class="div2">
      <img :src="item.url" class="div-image"/>
      <button class="div-btn" v-on:click="btnClick">可了解详情</button>
    </div>
  </div>

</template>
<script>
  import { XImg ,XButton } from 'vux'

  export default {
    components: {
      XImg,
      XButton
    },
    methods: {
      requestImg(){
        let url='';
        this.$http.post(url).then(function (responseDate) {
           this.dataImags=responseDate.data;

        }),
          function (error) {
            console.log("数据失败"+error.data.status());
          }
      },
      /**/
      btnClick(){
        console.log("点击事件");
      },

      imageList () {
        this.imgs = [
          {
            url: '../../static/image/3.png',
            id: 1
          },
          {
            url: '../../static/image/2.png',
            id: 2
          },
          {
            url: '../../static/image/2.png',
            id: 3
          },
          {
            url: '../../static/image/2.png',
            id: 4
          }
        ]
      }


    },
    data () {
      return {
        imgs: [],
        dataImags: '',

      }
    },
    mounted () {
      this.imageList()
    }

  }
</script>
<style scoped>

  .div2 {
    position: relative;
    margin-left: 5px;
    margin-top: 3px;
    margin-right: 5px;
  }
  .x-img{
    width: 100%;
  }
  .div-image {
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
