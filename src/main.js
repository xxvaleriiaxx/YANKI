import { createApp } from 'vue'
import { createStore} from "vuex";
import App from './App.vue'
import router from './router'

export const store = createStore({
    state () {
        return {
            user: {}
        }
    },
    mutations: {
        getting_data(state, user_data) {
            // изменяем состояние
            state.user = user_data
        }
    }
})

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
