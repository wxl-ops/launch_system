import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mockServer'
import { Container, Header, Aside, Main, Footer, Button, Menu, Submenu, MenuItemGroup, MenuItem, Form, FormItem, Select, Option, Input, Table, TableColumn, Pagination, DatePicker, Dialog ,Upload} from 'element-ui'

// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Footer.name, Footer)
Vue.component(Button.name, Button)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Input.name, Input)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Dialog.name, Dialog)
Vue.component(Upload.name, Upload)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
