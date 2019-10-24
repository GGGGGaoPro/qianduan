// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/index.css'
import {Tabbar, TabbarItem, NavBar, Icon, Search, Card, Panel, Image, Field, Divider, Dialog, Row, Col, Grid, GridItem, Sticky, Button, DropdownMenu, DropdownItem, Tag, GoodsAction, GoodsActionButton} from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Icon).use(Search).use(Card).use(Panel).use(Image).use(Field).use(Divider).use(Row).use(Col)
Vue.use(Grid).use(GridItem).use(Sticky).use(Button).use(DropdownMenu).use(DropdownItem).use(Dialog).use(Tag).use(GoodsAction).use(GoodsActionButton)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
