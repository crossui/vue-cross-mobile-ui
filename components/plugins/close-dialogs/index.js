/**
 * import { CloseDialogsPlugin } from 'vcu'
 * Vue.use(CloseDialogsPlugin, router)
 */
export default {
    install(Vue, router) {
        router.beforeEach((to, from, next) => {
            const list = ['alert', 'confirm', 'toast', 'loading', 'datetime']
            list.forEach(one => {
                if (Vue.$vcu[one]) {
                    Vue.$vcu[one].hide && Vue.$vcu[one].hide()
                }
            })
            next()
        })
    }
}