<template>
  <div class="main-wrap login-page">
    <h1><img src="../assets/logo.png" alt="Vue.js PWA"></h1>
    <div v-if="user">
      <div class="img-box"><img :src="user.photoURL" width="100"></div>
      <dl>
        <dt>{{user.displayName}}</dt>
        <dd>{{user.email}}</dd>
      </dl>
      <!--<button class="btn btn-secondary" @click="logOut">Log out</button>-->
      <!--<br><br><br>-->
      <!--<pre>{{user}}</pre>-->
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-wrap .img-box{border-radius: 50%;display: inline-block;overflow: hidden}
</style>
<script>
import {auth} from '@/auth'

export default {
    name: 'hello',
    computed: {
        user() {
            return this.$store.getters['user/user']
        }
    },
    methods: {
        logOut() {
            auth.logout()
        }
    }
}
</script>
