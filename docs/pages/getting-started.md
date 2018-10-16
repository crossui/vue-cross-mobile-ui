# 快速上手

> 在开始之前，推荐先学习 Vue 和 ES2015，并正确安装和配置了 Node.js v8.9 或以上。
官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。

## 引入 vcu-mobile

#### 1. 安装脚手架工具

```jsx
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```

#### 2. 创建一个项目 

使用命令行进行初始化。

```jsx
$ vue create vcu-demo
```

并配置项目。

若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装：rm -rf node_modules && cnpm install。

#### 3. 使用组件

```jsx
$ npm i --save vcu-mobile
```


完整引入

```jsx
import Vue from 'vue';
import App from './App';
import router from './router/index';

import { default as vcuMobile, Plugins } from 'vcu-mobile';
import 'vcu-mobile/dist/styles/vcuMobile.css';
Vue.use(vcuMobile);
for (let i = 0; i < Plugins.length; i++) {
    Vue.use(Plugins[i])
}

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
```