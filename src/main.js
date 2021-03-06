// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import echarts from 'echarts'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, // 使用store
    components: { App },
    template: '<App/>'
})
