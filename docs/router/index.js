import Vue from 'vue'
import VueRouter from 'vue-router'
import { menuRouter, routers } from './router';
import NProgress from 'nprogress'
Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    //mode: 'history',
    routes: routers
};

const router = new VueRouter(RouterConfig);

export default router;

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.path == "/") {
        next({
            name: 'getting-started'
        });
    } else {
        next();
    }
});

router.afterEach((to) => {
    NProgress.done()
    window.scrollTo(0, 0);
});