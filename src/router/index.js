import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("../pages/Home/Home.vue")
const Order = () => import("../pages/Order/Order.vue")
const Profile = () => import("../pages/Profile/Profile.vue")
const Search = () => import("../pages/Search/Search.vue")
const Login = () => import("../pages/Login/Login.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home,
      meta: { 
        showFooter: true
      }
    },
    {
      path: '/order',
      component:Order,
      meta: { 
        showFooter: true
      }
    },
    {
      path: '/profile',
      component:Profile,
      meta: { 
        showFooter: true
      }
    },
    {
      path: '/search',
      component:Search,
      meta: { 
        showFooter: true
      }
    },
    {
      path: '/login',
      component:Login
    },
  ],
  mode:"history"
})
