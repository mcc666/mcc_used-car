/*
入口文件
 */

import Vue from 'vue'
import App from './App.vue'
import {Button,Search,IndexList, IndexSection,Cell} from 'mint-ui'
import router from './router'
import store from './store'
Vue.component(Search.name, Search)
Vue.component(Button.name,Button)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Cell.name, Cell)

new Vue({
  el: '#app',
  render:h =>h(App),
  router,
  store
})
