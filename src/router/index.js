import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CatalogPage from '../views/CatalogPage.vue'
import ExchangeRefund from "../views/ExchangeRefund.vue";
import DeliveryPayment from "../views/DeliveryPayment.vue";
import ProductCard from "../views/ProductCard.vue";
import Authorization from "../views/Authorization.vue"
import Basket from "../views/Basket.vue"
import Account from "../views/Account.vue"
import Favourites from "../views/Favourites.vue"
import {store} from '../main';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogPage
    },
    {
      path: '/exchange&refund',
      name: 'exchange&refund',
      component: ExchangeRefund
    },
    {
      path: '/delivery&payment',
      name: 'delivery&payment',
      component: DeliveryPayment
    },
    {
      path: '/product',
      name: 'product',
      component: ProductCard
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: Authorization
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites,
      beforeEnter: (to, from, next) => {
        console.log(store.state.user.email)
        if (store.state.user.email && store.state.user.password) {
          next()
        }else {
          next({path:'/authorization'})
        }
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      beforeEnter: (to, from, next) => {
        console.log(store.state.user.email)
        if (store.state.user.email && store.state.user.password) {
          next()
        }else {
          next({path:'/authorization'})
        }
      }
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket,
      beforeEnter: (to, from, next) => {
        console.log(store.state.user.email)
        if (store.state.user.email && store.state.user.password) {
          console.log("Корзина")
          next()
        }else {
          console.log("Авторизация")
          next({path:'/authorization'})
        }
      }
    }
  ]
})
export default router
