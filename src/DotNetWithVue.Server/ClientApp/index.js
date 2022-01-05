import _ from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './bar.js';
import routerInfo from './component/Navi'

Vue.use(ElementUI);
Vue.use(VueRouter)

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router: routerInfo.router,
})