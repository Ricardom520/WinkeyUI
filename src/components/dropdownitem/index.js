import WkDropdownItem from './index.vue'

WkDropdownItem.install = (Vue) => {
  Vue.component(WkDropdownItem.name, WkDropdownItem)
}

export default WkDropdownItem