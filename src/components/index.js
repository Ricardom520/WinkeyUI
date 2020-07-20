import WkButton from './button';
import WkDivider from './divider';
import WkRow from './row';
import WkCol from './col';
import WkDropdown from './dropdown';
import WkDropdownMenu from './dropdownmenu';
import WkDropdownItem from './dropdownitem';
import WkMessage from './message';
import WkSwitch from './switch';
import WkSteps from './steps';
import WkStep from './step';
import WkSpace from './space';
import WkSpaceItem from './spaceitem';
import WkBreadcrumb from './breadcrumb';
import WkBreadcrumbItem from './breadcrumbitem';
import WkPagination from './pagination';
import WkInput from './input';

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
  WkStep,
  WkSpace,
  WkSpaceItem,
  WkBreadcrumb,
  WkBreadcrumbItem,
  WkPagination,
  WkInput,
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
  WkSpace,
  WkSpaceItem,
  WkStep,
  WkSteps,
  WkInput,
}