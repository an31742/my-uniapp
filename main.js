import Vue from 'vue'
import App from './App'
import Vant from 'vant'


Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(Vant)
const app = new Vue({
    ...App
})
app.$mount()
