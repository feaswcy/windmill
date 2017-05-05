import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import SystemView from '../views/SystemView.vue'
import WindmillView from  '../views/WindmillView.vue'
import GraphView from '../views/GraphView.vue'
import AlarmView from  '../views/AlarmView.vue'
import LogView from  '../views/LogView.vue'
import ProjectView from '../views/ProjectView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', redirect: '/system' },
    { path: '/system', component:SystemView },
    { path: '/project', component:ProjectView },
    { path: '/windmill', component:WindmillView},
    { path: '/graph', component: GraphView },
    { path: '/alarm', component: AlarmView },
    { path: '/log', component: LogView},
    // { path: '/top/:page(\\d+)?', component: createListView('top') },
    // { path: '/new/:page(\\d+)?', component: createListView('new') },
    // { path: '/show/:page(\\d+)?', component: createListView('show') },
    // { path: '/user/:id', component: UserView },
    // { path: '/graph/:id(\\d+)', component: ItemView },
    // { path: '/alarm/:page(\\d+)?', component: createListView('alarm') },
    // { path: '/log/:page(\\d+)?', component: createListView('log') },
    // { path: '/alarm', component: AlarmView},
    // { path: '/log', component: LogView},
  ]
})
