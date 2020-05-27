import Vue from 'vue'
import App from './App.vue'
import router from './router'
import WinkeyUI from './components';

/* 全局样式 */
import '@/styles/index.scss'
import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false
Vue.use(WinkeyUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
