import { createStore } from 'vuex'

type Product = {
  id: string
  name: string
  price: number
  img: string
  attributes: string
}
type payload = {
  id: string
  type: string
}
interface cartItem {
  id: string
  name: string
  price: number
  img: string
  attributes: string
  quantity: number
}

type state = {
  currentProduct: object
  cart: object[]
  products: Product[]
  total: number
}
export default createStore({
  state: {
    total: 0,
    currentProduct: {},
    cart: [],
    products: [
      {
        id: '1',
        name: 'Smartphone X',
        price: 699.99,
        img: '/src/assets/images/mobile.jpg',
        attributes:
          'Operating System: Android, Display Size: 6.5 inches, Camera Resolution: 12 MP, Storage Capacity: 128 GB, RAM: 8 GB'
      },
      {
        id: '2',
        name: 'Headphones Y',
        price: 149.99,
        img: '/src/assets/images/mobile.jpg',
        attributes:
          'Connectivity: Bluetooth, Battery Life: Up to 20 hrs, Noise Cancellation: Active, Color: Black, Weight: 250 grams'
      },
      {
        id: '3',
        name: 'Smartwatch Z',
        price: 249.99,
        img: '/src/assets/images/mobile.jpg',
        attributes:
          'Compatible OS: iOS, Android, Display Type: OLED, Water Resistance: 50 meters, Sensors: Heart rate, GPS, Battery Life: Up to 7 d'
      }
    ]
  },
  mutations: {
    getSingleProduct(state: state, id: string) {
      state.currentProduct = state.products.filter((product: Product) => product.id == id)[0]
    },
    addProduct(state: state, id: string) {
      if (state.cart.length > 0) {
        let index: number = -1
        index = state.cart.findIndex((item: cartItem) => item.id == id)
        if (index > -1) {
          const { quantity } = <cartItem>state.cart[index]
          state.cart[index] = { ...state.cart[index], quantity: quantity + 1 }
        } else {
          state.cart.push({ ...state.currentProduct, quantity: 1 })
        }
      } else {
        state.cart.push({ ...state.currentProduct, quantity: 1 })
      }
    },
    manageQuantity(state: state, payload: payload) {
      let index: number = -1
      index = state.cart.findIndex((item: cartItem) => item.id == payload.id)
      const { quantity } = <cartItem>state.cart[index]
      console.log('ty', payload.type)
      if (payload.type == 'increase') {
        state.cart[index] = { ...state.cart[index], quantity: quantity + 1 }
        console.log('cart', state.cart)
      } else {
        if (quantity > 1) state.cart[index] = { ...state.cart[index], quantity: quantity - 1 }
      }
    },
    claculateTotal(state: state) {
      state.total = 0
      state.cart.map((product) => {
        state.total += product.price * product.quantity
      })
    }
  },
  actions: {
    getProduct({ commit }: any, id: number) {
      console.log('dispatching', id)
      commit('getSingleProduct', id)
    },
    addToCart({ commit }: any, id: number) {
      commit('addProduct', id)
      commit('claculateTotal')
    },
    incrementQunatity({ commit }: any, id: string) {
      commit('manageQuantity', { id: id, type: 'increase' })
      commit('claculateTotal')
    },
    decrementQunatity({ commit }: any, id: string) {
      commit('manageQuantity', { id: id, type: 'decrease' })
      commit('claculateTotal')
    }
  },
  getters: {
    getProducts(state: state) {
      return state.products
    },
    getCartProducts(state: state) {
      return state.cart
    },
    getTotal(state: state) {
      console.log('state total', state.total)
      return state.total
    }
  },
  modules: {}
})
