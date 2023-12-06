import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('../components/login/Login.vue')
  }
  ,
  {
    name: 'signup',
    path: '/sign-up',
    component: () => import('../components/signup/Signup.vue')
  },
  {
    name: 'inbox',
    path: '/inbox',
    component: () => import('../components/inbox/Inbox.vue')
  },
  {
    name: 'chat',
    path: '/inbox/:id',
    component: () => import('../components/chat/Chat.vue')
  },
  {
    name: 'profile',
    path: '/:userName',
    component: () => import('../components/profile/Profile.vue')
  },
  
  {
    path: '/',
    redirect: '/login'
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
