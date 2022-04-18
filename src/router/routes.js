import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    //, If you need child routes
    // Example route in url: "/user/lookup"
    // children: [
    //   {
    //     path: 'user',
    //     name: 'user',
    //     component: User,
    //     children: [
    //       {
    //         path: 'lookup',
    //         name: 'lookup',
    //         component: Lookup
    //       }
    //     ]
    //   }
    // ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

export default routes;
