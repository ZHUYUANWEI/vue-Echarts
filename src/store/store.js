import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     //
//   },
//   mutations: {
//     //
//   },
//   actions: {

//   },
//   modules: {
//     // app,
//     // user
//   }
// })

// export default store
const state = {
    count: 1
}
const mutations = {
    add (state) {
        state.count += 1
    },
    reduce (state) {
        state.count -= 1
    }
}
export default new Vuex.Store({
    state,
    mutations
})
