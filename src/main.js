import { createApp } from 'vue'
import { createStore} from "vuex";
import App from './App.vue'
import router from './router'

const store = createStore({
    state () {
        return {
            user: {},
            basket: [],
            favourites: []
        }
    },
    mutations: {
        getting_data_user(state, user_data) {
            // изменяем состояние
            state.user = user_data
        }
    }
})
export {store}
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
