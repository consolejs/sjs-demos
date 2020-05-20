// import Login from './views/public/login.svelte'
import PublicIndex from './index.svelte'
// import PublicLayout from './index.svelte'
import Bookstore from './bookstore/index.svelte'
import ExampleA from './example/index.svelte'
// import AdminIndex from './views/admin/index.svelte'
// import EmployeesIndex from './views/admin/employees/index.svelte'

function userIsAdmin() {
  //check if user is admin and returns true or false
}

const pathname =  window.location.host.indexOf('consolejs.cn') > -1 ? "/sjs-demos/" : "";

const routes = [{
    name: pathname,
    component: PublicIndex,
  },
  {
    name: '404',
    path: '404',
    component: PublicIndex
  },
  {
    name: pathname + 'book',
    component: Bookstore,
    layout: ''
  },
  {
    name: pathname + 'ex_a',
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