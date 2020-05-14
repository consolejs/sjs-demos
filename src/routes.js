// import Login from './views/public/login.svelte'
import PublicIndex from './index.svelte'
// import PublicLayout from './index.svelte'
import Bookstore from './bookstore/index.svelte'
// import AdminIndex from './views/admin/index.svelte'
// import EmployeesIndex from './views/admin/employees/index.svelte'

function userIsAdmin() {
  //check if user is admin and returns true or false
}




const routes = [
  {
    name: '/',
    component: PublicIndex,
  },
  { name: 'book', component: Bookstore, layout: '' }
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

export { routes }
