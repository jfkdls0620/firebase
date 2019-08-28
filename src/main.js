import Vue from 'vue'

import App from './App'

import {router} from '@/router'
import {store} from '@/store'
import {auth} from '@/auth'

import {rtdbPlugin} from 'vuefire'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(rtdbPlugin)
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    beforeCreate () {
        auth.init(this)
    },
    template: '<App/>',
    components: { App }
})





