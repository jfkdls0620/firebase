<template>
    <div class="login-page">
        <h1>로그인</h1>
        <div class="form" id="firebaseui-auth-container"></div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
import {auth} from '@/auth'

export default {
    name: 'auth',
    mounted() {
        auth.authForm('#firebaseui-auth-container')
    }
}
</script>
<style>
@import "../../node_modules/firebaseui/dist/firebaseui.css";

.login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
}
.form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}


</style>
