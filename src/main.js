import { createApp } from 'vue';
import Axios from 'axios';
import "@/services/index";
import { loadAsyncScript } from '@/utils/loadScript';
import App from './App.vue';

import {  Toast, Dialog, Lazyload } from 'vant';

import router from './router/index';
import store from './store/index';

const tool = {
    async weixinShareConfig(){
        await loadAsyncScript("//res.wx.qq.com/open/js/jweixin-1.4.0.js");
    },
    async qqMapConfig(){
        await loadAsyncScript("//mapapi.qq.com/web/mapComponents/geoLocation/v/geolocation.min.js");
        await loadAsyncScript("//map.qq.com/api/js?v=2.exp&key=TTNBZ-C45K6-QEHSA-EOUKL-OI5WF-7FF6K&libraries=convertor");
    }
}

//动态改变标题
router.beforeEach(async (to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if(to.path === '/orderList'){
        // await tool.weixinShareConfig();
        await tool.qqMapConfig();
        next();
    }else{
        next();
    }
});


const vue = createApp(App);

vue.config.globalProperties.$axios = Axios;

vue
    .use(router)
    .use(store)
    .use(Toast)
    .use(Dialog)
    .use(Lazyload)
    .mount('#app');
