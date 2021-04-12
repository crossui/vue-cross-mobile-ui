import Vue from 'vue'
import App from './App'
import router from './router/index'

import vcu from 'vcu';
import 'vcu/dist/vcu.css';
Vue.use(vcu)

import DemoBlock from './demo-block.vue';
Vue.component("demo-block", DemoBlock);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})