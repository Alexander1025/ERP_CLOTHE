import Vue from 'vue';
import Router from 'vue-router';
// import {apis} from './../core/apis';
import wrap from './../pages/wrap/index.vue';


Vue.use(Router);

function loadView(view) {
  return () => import(`../pages${view}.vue`);
}

const router = new Router({
  mode: 'history',
  base:'clothe',
  routes: [
    {
      path: '/',
      name: 'wrap',
      component: wrap,
      children: [
        {
          path: '/',
          redirect: '/outputClothe',
        },
        {
          path: '/home',
          component: loadView('/home/index'),
          meta: {
            keepAlive: false
          },
        },
        {
          path: '/outputClothe',
          component: loadView('/outputClothe/index'),
          meta: {
            keepAlive: false
          },
        },
        
      ]
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: loadView('/login/index')
    // },
  ],

});
export default router;
