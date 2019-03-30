import Vue from 'vue';
import Router from 'vue-router';
import Llist from './components/L-list.vue';
import List from './components/List.vue';
import index from './components/index.vue';
import our from './components/our.vue';
import lview from './components/list-view.vue';
import vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import remv from './assets/rem'
import { Icon } from 'vant';

Vue.use(Icon);
remv();
Vue.prototype.$ajax= axios
Vue.use(vant);
Vue.use (Router);

const router=new Router({
    routes:[{
        path:'/',
        name:'index',
        component:index,
        },{
            path:'/our',
            name:'our',
            component:our,
            },{
        path:'/list',
        name:'List',
        component:List,
        meta:{
        }
    },{
        path:'/list-view',
        name:'lview',
        component:lview,
        meta:{//传递某个状态
            isHideTopAndBottom:true,
        }
    },{
        path:'/L-list/:id',
        name:'L-list',
        component:Llist,
        meta:{//传递某个状态
            isHideTopAndBottom:true,
        }
    }]
})

export default router;