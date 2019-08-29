<template>
    <div class="container">
        <div class="card">
            <div class="card-body" style="text-align: left">
                <div class="form-group">
                    <label>글 제목</label>
                    <p>{{newItem.title}}</p>
                </div>
                <div class="form-group">
                    <label>내용</label>
                    <p>{{newItem.content}}</p>
                </div>
                <div class="form-group">
                    <!--<button type="submit" class="btn btn-warning">글수정</button>-->
                    <router-link class="btn btn-secondary" to="/list">글목록</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from '@/auth'
import {mapGetters} from 'vuex'
import {auth} from '@/auth'

export default {
    components:{
        name: 'ViewItem'
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
        }),
        user() {
            return this.$store.getters['user/user']
        }
    },
    created() {
        this.$firebaseRefs.items.child(this.$route.params.id).once("value", snapshot => {
            let {title, content} = snapshot.val();
            this.newItem = {
                title,
                content
            }
        })
    }
}
</script>