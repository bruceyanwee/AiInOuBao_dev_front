import Vue from 'vue'
import uView from 'uview-ui/uview-ui';
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uView);
// main.js
const app = new Vue({
    ...App
})
app.$mount()
