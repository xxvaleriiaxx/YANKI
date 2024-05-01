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
      component: Favourites
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    }
  ]
})

export default router
