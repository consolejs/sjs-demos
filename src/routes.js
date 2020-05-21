// import Login from './views/public/login.svelte'
import PublicIndex from './index.svelte'
import Public404 from './components/404.svelte'
import Bookstore from './bookstore/index.svelte'
import ExampleA from './example/index.svelte'
// import AdminIndex from './views/admin/index.svelte'
// import EmployeesIndex from './views/admin/employees/index.svelte'

import { onlinePath } from "./libs/some";

function userIsAdmin() {
  //check if user is admin and returns true or false
}

const routes = [{
    name: onlinePath + '/',
    component: PublicIndex,
  },
  {
    name: '404',
    path: '404',
    component: Public404
  },
  {
    name: onlinePath + '/book',
    component: Bookstore,
    layout: ''
  },
  {
    name: onlinePath + '/ex_a',
    component: ExampleA,
    layout: ''
  }
  //   {
  //     name: 'admin',
  //     component: AdminLayout,
  //     onlyIf: { guard: userIsAdmin, redirect: '/login' },
  //     nestedRoutes: [
  //       { name: 'index', component: AdminIndex },
  //       {
  //         name: 'employees',
  //         component: '',
  //         nestedRoutes: [
  //           { name: 'index', component: EmployeesIndex },
  //           { name: 'show/:id', component: EmployeesShow },
  //         ],
  //       },
  //     ],
  //   },
]

export {
  routes
}