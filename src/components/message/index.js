import Vue from 'vue';
import WkMessage from './index.vue';

let ToastConstructor = Vue.extend(WkMessage);
let instance;

const Message = function(options = {}) {
  console.log(options)
  instance = new ToastConstructor({
    data: typeof options === 'object' ? options : {message: options}
  }).$mount();

  document.body.appendChild(instance.$el);
}

Vue.prototype.$message = Message;

WkMessage.install = (Vue) => {
  Vue.component(WkMessage.name, WkMessage)
};

export default WkMessage;