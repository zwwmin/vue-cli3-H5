import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import filters from './filters/index'
Vue.config.productionTip = false
// 注入全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
