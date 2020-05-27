import WkButton from './button/index';
import WkDivider from './divider/index';
import WkRow from './row/index';
import WkCol from './col/index';

const components = [
  WkButton,
  WkDivider,
  WkRow,
  WkCol,
]

const install = (Vue) => {
  for(let key in components) {
    Vue.component(components[key].name, components[key])
  }
}

export default {
  install,
  WkButton,
  WkDivider,
  WkRow,
  WkCol
}