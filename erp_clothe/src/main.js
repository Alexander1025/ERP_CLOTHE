import Vue from 'vue';
import router from './router';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import { apis } from './core/apis';
import {HttpServer} from './core/http.server';

Vue.config.productionTip = false;

Vue.use(Antd);

Vue.prototype.apis = apis.api;
Vue.prototype.http = HttpServer;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});