import Vue from 'vue';
import App from './App.vue';
import router from './router';
import apilist from '@/http-request/apilist';
import ElementUI from 'element-ui';
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import QS from 'qs';
import './assets/css/CSS.css'; //通用样式
import '@/common/font.css';/* 引入字体 */

Vue.prototype.$qs = QS;
Vue.prototype.$Message = Message;
Vue.prototype.$http = apilist; //添加apilist到Vue的原型对象上
// 公共组件
import Drawer from '@/components/Drawer'
Vue.use(Drawer);
Vue.component('drawer',Drawer);

Vue.config.productionTip = false;

Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
