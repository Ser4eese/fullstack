import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import CreateComponent from '@/components/clients/Create';
import ListComponent from '@/components/clients/List';
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/list', name: 'List', component: ListComponent },
  ]
});