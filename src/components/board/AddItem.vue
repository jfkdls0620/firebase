<template>
    <div class="container">
        <h1>글쓰기</h1>
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>글 제목</label>
                        <input type="text" class="form-control" v-model="newItem.title">
                    </div>
                    <div class="form-group">
                        <label>내용</label>
                        <textarea class="form-control" v-model="newItem.content"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">글쓰기</button>
                        <router-link class="btn btn-secondary" to="/list">글목록</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
.card-body{
    text-align: left;
}
textarea.form-control{
    height: 300px;
    resize: none;
}
</style>
<script>
import { db } from '@/auth'
import {mapGetters} from 'vuex'

export default {
    components:{
        name: 'AddItem'
    },
    firebase: {
        items: db.ref('items')
    },
    computed: {
        ...mapGetters({
            user: 'user/user'
        })
    },
    data(vm){
        return{
            newItem:{
                title: '',
                content: ''
            }
        }
    },
    methods:{
        addItem(){
            this.newItem.name = 'unknown'
            if (this.user.displayName) {
                this.newItem.name = this.user.displayName
            }

            this.$firebaseRefs.items.push(this.newItem);
            this.newItem.title = '';
            this.newItem.content = '';
            this.$router.push('/list')
        }
    }
}

</script>