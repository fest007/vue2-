import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  // 将router、store挂载到vue实例上
  router,
  store,
  render: h => h(App),
}).$mount('#app')
