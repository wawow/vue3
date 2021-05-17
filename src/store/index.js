import { createStore } from 'vuex'

export default createStore({
    state() {
        count: 0
    },
    mutations: {
        increment() {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        double() {
            return 2 * state.count
        }
    }
})
