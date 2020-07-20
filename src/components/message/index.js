import Vue from 'vue';
import WkMessage from './index.vue';

let ToastConstructor = Vue.extend(WkMessage);
let instance;

const Message = function(options = {}) {
  instance = new ToastConstructor({
    data: typeof options === 'object' ? options : {message: options, type: this.type ? this.type : ''}
  }).$mount();

  document.body.appendChild(instance.$el);
}

Vue.prototype.$message = Message;
Vue.prototype.$message.success = Message.bind({type: 'success'});
Vue.prototype.$message.warning = Message.bind({type: 'warning'});
Vue.prototype.$message.error = Message.bind({type: 'error'});

WkMessage.install = (Vue) => {
  Vue.component(WkMessage.name, WkMessage)
};

export default WkMessage;