import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
// import Home from './views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

//   mode: 'history',
//   base; process.env.BASE_URL,
//   routes; [
//       {
//           path: '/',
//           name: 'home',
//           component: Home
//       },
//       {
//           path: '/about',
//           name: 'about',
//           // route level code-splitting
//           // this generates a separate chunk (about.[hash].js) for this route
//           // which is lazy-loaded when the route is visited.
//           component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//       },
//       {
//           path: '/vehicles/:slug',
//           name: 'vehicleDetail',
//           component: () => import(/* webpackChunkName: "vehicledetail" */ './views/VehicleDetails.vue')
//       },
//       {
//           path: '/reservation',
//           name: 'Reservation',
//           component: () => import(/* webpackChunkName: "reservation" */ './views/Reservation.vue')
//       },
//       {
//           path: '/confirmation',
//           name: 'Confirmation',
//           component: () => import(/* webpackChunkName: "confirmation" */ './views/Confirmation.vue')
//         }
//     ]
// })
