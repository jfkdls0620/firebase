<template>
    <div class="container">
        <h1>글목록</h1>
        <table class="table table-striped">
            <colgroup>
                <col width="*">
                <col width="*">
                <col width="*">
                <col width="20%">
            </colgroup>
            <thead>
                <tr>
                    <th>제목</th>
                    <th>내용</th>
                    <th>이름</th>
                    <th>etc</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item of items" :key="item['.key']">
                    <td><router-link :to="{ name: 'View', params: {id: item['.key']} }">{{ item.title }}</router-link></td>
                    <td>{{ item.content }}</td>
                    <td>{{ item.name || 'no-name' }}</td>
                    <td v-if="user">
                        <p v-if="user.email === item.email">
                            <router-link :to="{ name: 'Edit', params: {id: item['.key']} }" class="btn btn-warning">Edit</router-link>
                            <button @click="deleteItem(item['.key'])" class="btn btn-danger">삭제</button>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="btn-area">
            <router-link class="btn btn-primary" to="/add">글쓰기</router-link>
        </div>
    </div>
</template>
<style>
.btn-area{text-align: right;margin-top: 30px;}
</style>
<script>
 import { db } from "@/auth";
 import {auth} from '@/auth'

export default {
    components:{
        name: 'ListItem'
    },
    computed: {
        user() {
            return this.$store.getters['user/user']
        }
    },
    data() {
        return {
            items: []
        }
    },
    firebase:{
        items: db.ref('items')
    },
    methods: {
        deleteItem(key) {
            this.$firebaseRefs.items.child(key).remove();
        }
    }

}
</script>