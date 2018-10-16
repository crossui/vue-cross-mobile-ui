import Vue from 'vue'
import App from './App'
import router from './router/index'

import { default as vcuMobile, Plugins, TransferDom } from '../components/index';
import '../components/_style/index.less';
Vue.use(vcuMobile)
for (let i = 0; i < Plugins.length; i++) {
    Vue.use(Plugins[i])
}
Vue.directive('transfer-dom', TransferDom)
    //Vue.use(CloseDialogsPlugin, router)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})