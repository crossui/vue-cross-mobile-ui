import Vue from 'vue'
import VueRouter from 'vue-router'
import { menuRouter, routers } from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    //mode: 'history',
    routes: routers
};

const router = new VueRouter(RouterConfig);

export default router;

router.beforeEach((to, from, next) => {
    if (to.path == "/") {
        next({
            name: 'home'
        });
    } else {
        next();
    }
});

router.afterEach((to) => {
    window.scrollTo(0, 0);
});