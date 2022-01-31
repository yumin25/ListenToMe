import Vue from 'vue'
import VueRouter from 'vue-router'

// main 화면
import Home from '@/views/Home.vue'

import SingupPage from '../views/SignupPage.vue'
import CounselorMain from '../views/Counselor/CounselorMain.vue'
import LoginPage from '../views/LoginPage.vue'
import CounselorLoginPage from '../views/Counselor/CounselorLoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counselor',
    name: 'CounselorMain',
    component: CounselorMain
  },
  {
    path: '/signup',
    name: 'SignupForClient',
    component: SingupPage,
  },
  {
    path: '/signup/counselor',
    name: 'SignupForCounselor',
    component: SingupPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/login/counselor',
    name: 'CounselorLoginPage',
    component: CounselorLoginPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
