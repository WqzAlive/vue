import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Actionsheet from '../components/Actionsheet.vue'
import HelloFromVux from '../components/HelloFromVux.vue'
import Alert from '../components/alert.vue'
import Input from '../components/input.vue'
import CustomerService from '../viewTest/customer-service.vue'
import Person from '../components/person.vue'
import Carlnsuranceindex from '../components/CarInsuranceIndex.vue'
import CarHome from '../viewTest/car-home.vue'
import CarTips from  '../viewTest/car-tips.vue'
import Click from '../viewTest/click-vue.vue'
Vue.use(Router)
export default new Router({

  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path:'/action',
      component: Actionsheet
    },
    {
      path: '/hello1',
      component: HelloFromVux
    },
    {
      path :'/alert',
      component:Alert
    },
    {
      path: '/input',
      component: Input,
    },
    {
      path: '/customerService',
      name: '保险',
      component:CustomerService
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/carinsureindex',
      component: Carlnsuranceindex
    },
    {
      path: '/carhome',
      component: CarHome
    },
    {
      path: '/cartips',
      name:'保险小贴士',
      component:CarTips,
    },
    {
      path:'/click',
      name:'事件修饰符',
      component: Click
    }







  ]
})

