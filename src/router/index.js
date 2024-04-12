import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CatalogPage from '../views/CatalogPage.vue'
import ExchangeRefund from "../views/ExchangeRefund.vue";
import DeliveryPayment from "../views/DeliveryPayment.vue";
import ProductCard from "../views/ProductCard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    }
  ]
})

export default router
