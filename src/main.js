import Vue from 'vue'
import axios from 'axios'
import ViewUI from 'view-design'
import App from './App'
import store from './store'
import router from './router'
import 'view-design/dist/styles/iview.css'
import './permission'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //样式必须引入
Vue.use(ElementUI)
import '../src/style/main.css'
import VueJsonp from 'vue-jsonp'
import "./assets/icon/iconfont.css";
Vue.use(VueJsonp)

window.devicePixelRatio = 2;

import echarts from 'echarts'

import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

import world from 'echarts/map/json/world.json'
echarts.registerMap('world', world)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ViewUI)

// 设置基础URL
axios.defaults.baseURL = ''
// 设置请求超时时间
axios.defaults.timeout = 5000

Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
