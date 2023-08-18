<template>
    <div v-if="isLoading">
        <Loader/>
    </div>
    <div v-else>
        <ArticleDetail/>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import ArticleDetail from '../components/ArticleDetail.vue';
export default {
    components:{ArticleDetail},
    computed:{
     ...mapState({
        isLoading : state => state.articles.isLoading
     })
    },
    mounted() {
        this.$store.dispatch('articleDetail',this.$route.params.slug)
    },
   
}
</script>
<style>
    
</style>