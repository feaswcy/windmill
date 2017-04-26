import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import { createListView } from '../views/CreateListView'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import SystemView from '../views/SystemView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/top/:page(\\d+)?', component: createListView('top') },
    { path: '/new/:page(\\d+)?', component: createListView('new') },
    { path: '/show/:page(\\d+)?', component: createListView('show') },
    { path: '/user/:id', component: UserView },

    { path: '/', redirect: '/top' },
    { path: '/system', component:SystemView },
    { path: '/system/:id', component:createListView('system')},
    { path: '/windmill/:id(\\d+)', component: ItemView },
    { path: '/alarm/:page(\\d+)?', component: createListView('alarm') },
    { path: '/log/:page(\\d+)?', component: createListView('log') },
    // { path: '/alarm', component: AlarmView},
    // { path: '/log', component: LogView},
  ]
})
