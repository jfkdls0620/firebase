<template>
    <div class="container">
        <h1>글수정</h1>
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>글 제목</label>
                        <input type="text" class="form-control" v-model="newItem.title">
                    </div>
                    <div class="form-group">
                        <label>내용</label>
                        <textarea class="form-control" v-model="newItem.content"></textarea>
                    </div>
                    <div class="form-group" style="text-align:right;">
                        <button type="submit" class="btn btn-warning">글수정</button>
                        <router-link class="btn btn-secondary" to="/list">글목록</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from '@/auth'
import {mapGetters} from 'vuex'

export default {
    components:{
        name: 'EditItem'
    },
    data() {
        return {
            newItem: {
                title: '',
                content: ''
            }
        }
    },
    firebase: {
        items: db.ref('items')
    },
    computed: {
        ...mapGetters({
            user: 'user/user'
        })
    },
    created() {
        this.$firebaseRefs.items.child(this.$route.params.id).once("value", snapshot => {
            let {title, content} = snapshot.val();
            this.newItem = {
                title,
                content
            }
        })
    },
    methods: {
        updateItem() {
            this.newItem.name = 'unknown'
            if (this.user.displayName) {
                this.newItem.name = this.user.displayName
            }
            if (this.user.email) {
                this.newItem.email = this.user.email
            }
            this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem);
            this.$router.push('/list')
        }
    },
}
</script>