import Vue from 'vue'
import Router from 'vue-router'
import { auth } from '@/auth'

import NProgress from 'nprogress'

import Hello from '@/components/Hello'
import Auth from '@/components/Auth'

import AddItem from '@/components/board/AddItem'
import EditItem from '@/components/board/EditItem'
import ListItem from '@/components/board/ListItem'
import ViewItem from '@/components/board/ViewItem'

Vue.use(Router)

var routes = [
    { path: '/', name: 'hello', component: Hello },
    { path: '/auth', name: 'auth', component: Auth, meta: { guestOnly: true } },
    { path: '/add', name: 'Add', component: AddItem, meta: { requireAuth: true}},
    { path: '/view/:id', name: 'View', component: ViewItem },
    { path: '/edit/:id', name: 'Edit', component: EditItem },
    { path: '/list', name: 'List', component: ListItem },
    { path: '*', redirect: '/hello' }
]

export const router = new Router({
    mode: 'history',
    routes
})

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
})

router.beforeEach((to, from, next) => {
    let currentUser = auth.user()
    let requireAuth = to.matched.some(record => record.meta.requireAuth)
    let guestOnly = to.matched.some(record => record.meta.guestOnly)

    if (requireAuth && !currentUser) next('auth')
    else if (guestOnly && currentUser) next('auth')
    else next()
})
