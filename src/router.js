import Vue from 'vue';
import Router from 'vue-router';
import Llist from './components/L-list.vue';
import List from './components/List.vue';
import index from './components/index.vue';
import our from './components/our.vue';
import lview from './components/list-view.vue';
import Reg from './components/Reg.vue';
import Login from './components/Login.vue';
import vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import remv from './assets/rem'
import { IsLogin } from './utils/auth'
import { Icon } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Icon);
remv();
Vue.prototype.$ajax = axios
Vue.use(vant);
Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index,
    }, {
        path: '/our',
        name: 'our',
        component: our,
    }, {
        path: '/list',
        name: 'List',
        component: List,
        meta: {
             needLogin: true,
        }
    }, {
        path: '/list-view',
        name: 'lview',
        component: lview,
        meta: {//传递某个状态
            isHideTopAndBottom: true,//判断头部是否存在
            needLogin: true
        }
    }, {
        path: '/L-list/:id',
        name: 'L-list',
        component: Llist,
        meta: {//传递某个状态
            isHideTopAndBottom: true,//判断头部是否存在
            needLogin: true
        }
    }, {
        path: '/reg',
        name: 'Reg',
        component: Reg,
        meta: {
            isHideTopAndBottom: true,
        }
    }, {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            isHideTopAndBottom: true,
        }
    }]
})

// beforeEach是路由的钩子函数 在每一个路由跳转之前执行
//  to    跳转到的页面
//  from  从哪里来
//  next  下一个,继续执行

router.beforeEach(function (to, from, next) {//登陆判断
    if (to.meta.needLogin) {
        if (IsLogin()) {
            next()
        } else {
            next({
                name: 'Login'
            })
        }
    }else{
       next() 
    }
})
export default router;