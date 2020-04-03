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
import "./assets/icon/iconfont.js";

import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // 通过插件的形式挂载


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

const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': require('./common/lang/zh'),   // 中文语言包
        'en-US': require('./common/lang/en')    // 英文语言包
    }
})


new Vue({
    el: '#app',
    i18n,
    router,
    store,
    render: h => h(App),
})
