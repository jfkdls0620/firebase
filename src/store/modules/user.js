import {auth} from '@/auth';

const state = {
    user: {}
}

const getters = {
    user: state => state.user,
    isLogged: state => (state.user !== null)
}

const mutations = {
    setUser: (state, user) => {
        state.user = user
    }
}

const actions = {
    setCurrentUser: ({ commit }) => {
        commit('setUser', auth.user())
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}