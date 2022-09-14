import { createStore } from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import * as auth from "../store/modules/Auth";
import * as user from "../store/modules/User";
// import * as message from "@/store/modules/Message";

export default createStore({
    plugins:[
        createPersistedState()
    ],
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth,
        user,
        // message,
    }
})