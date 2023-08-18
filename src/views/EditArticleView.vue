<template>
    <p class="display-2 text-center mb-1">Edit Article</p>
     <Loader v-if="isLoading"/>
    <div v-else-if="!isLoading && article">
        <ArticleForm v-if="article" 
        :intialValue="intialValue"
        :submitHandler="editArticleHandler"
        :clickText="'Edit Article'"
        />
        
    </div>
</template>
<script>
import ArticleForm from '../components/ArticleForm.vue';
import { mapState } from 'vuex';
export default {
    components:{
        ArticleForm
    },
    computed:{
        ...mapState({
         article: state => state.articles.articleDetail,
         isLoading : state => state.articles.isLoading 
        }),
        intialValue(){
            return {
                title:this.article.title,
                description:this.article.description,
                body:this.article.body
            }
        }
    },
    methods: {
        editArticleHandler(article){
         this.$store.dispatch('EditArticle',{article:article,slug:this.$route.params.slug}).then(() => {
         this.$router.push({name:'home'})
         this.$store.dispatch('articles')
         })
        }
    },
    mounted() {
        this.$store.dispatch('articleDetail', this.$route.params.slug)
    },
    
}
</script>
<style>
    
</style>