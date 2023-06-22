import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '@/views/ProductListPage.vue'
import ProductDetailPage from '@/views/ProductDetailPage.vue'
import CartPage from '@/views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductPage
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetailPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    }
  ]
})

export default router
