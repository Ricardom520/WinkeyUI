import WkButton from './button/index';
import WkDivider from './divider/index';
import WkRow from './row/index';
import WkCol from './col/index';
import WkDropdown from './dropdown/index';
import WkDropdownMenu from './dropdownmenu';
import WkDropdownItem from './dropdownitem';
import WkMessage from './message/index';
import WkSwitch from './switch/index';
import WkSteps from './steps/index';
import WkStep from './step/index';

const components = [
  WkButton,
  WkDivider,
  WkRow,
  WkCol,
  WkDropdown,
  WkDropdownItem,
  WkDropdownMenu,
  WkMessage,
  WkSwitch,
  WkSteps,
  WkStep
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
  WkCol,
  WkDropdown,
  WkDropdownItem,
  WkDropdownMenu,
}