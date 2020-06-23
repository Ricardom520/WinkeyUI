import WkStep from './index.vue';

WkStep.install = (Vue) => {
  Vue.component(Vue.name, WkStep);
}

export default WkStep;