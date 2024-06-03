import { createApp } from 'vue'
import { createStore} from "vuex";
import App from './App.vue'
import router from './router'

const store = createStore({
    state () {
        return {
            user: {},
            basket: [],
            favourites: [],
            product_card: {},
            index_favourite: -1
        }
    },
    mutations: {
        getting_data_user(state, user_data) {
            // изменяем состояние
            state.user = user_data
        },
        getting_product_card(state, active_product) {
            state.product_card = active_product
        },
        getting_product_card_favourite(state, index_favourite_product) {
            state.index_favourite = index_favourite_product
        }
    }
})
export {store}
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
