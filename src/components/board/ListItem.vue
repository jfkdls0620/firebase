<template>
    <div class="container">
        <h1>글목록</h1>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>제목</th>
                <th>내용</th>
                <th>이름</th>
                <th colspan="2">Action</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item of items" :key="item['.key']">
                    <td>{{ item.title }}</td>
                    <td>{{ item.content }}</td>
                    <td>{{ item.name || 'no-name' }}</td>
                    <td>
                        <router-link :to="{ name: 'Edit', params: {id: item['.key']} }" class="btn btn-warning">Edit</router-link>
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

export default {
    components:{
        name: 'ListItem'
    },
    data() {
        return {
            items: []
        }
    },
    firebase:{
        items: db.ref('items')
    }

}
</script>