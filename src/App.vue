<template>
  <div id="app">
    <header>
      <ul>
        <li><router-link :to="{ name : 'hello' }" class="btn">Home</router-link></li>
        <li><router-link :to="{ name : 'List' }" class="btn">글목록</router-link></li>
        <li>
          <router-link v-if="!user" :to="{ name : 'auth' }" class="btn" >로그인</router-link>
          <button v-else class="btn" @click="logOut">로그아웃</button>
        </li>
      </ul>
    </header>
    <main>
      <!--<img src="./assets/logo.png" alt="Vue.js PWA">-->
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import {auth} from '@/auth'
export default {
    name: 'app',
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

<style>
header{font-size:0; text-align: center;height:auto;padding: 15px 0;background-color:#fff;}
header ul{margin: 0;padding: 0;}
header li{display: inline-block;line-height:16px;}
header li .btn{display:inline-block;line-height:16px;font-size:16px;color: #000;}
body {
  margin: 0;
}
.table th, .table td{vertical-align: middle}
p{margin: 0;padding: 0;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

.page-enter-active, .page-leave-active {
  transition: opacity .8s, transform .8s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
