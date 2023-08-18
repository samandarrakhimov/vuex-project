<template>
    <Loader v-if="isLoading"/>
    <div v-else>
    <ArticleForm  
    :intialValue="intialValue" 
    :submitHandler="craeateArticleHandler"
     :clickText="'Create Article'"/>
    </div>
  
</template>
<script>

import ArticleForm from '../components/ArticleForm.vue';
import { mapState } from 'vuex';
export default {
    components:{
    ArticleForm
    },
    data() {
        return {
            title:'', 
            description:'',
            body:'',
        }
    },
    methods: {
        craeateArticleHandler(article){
            console.log(article);
            this.$store.dispatch('createArticle',article)
            .then(() => {
            this.$router.push('/')
            this.$store.dispatch('articles')
            } )
            }
          
        
    },
    computed:{
     ...mapState({
        isLoading : state => state.articles.isLoading,
        data : state => state.articles
     }),
     intialValue(){
        return {
            title:'',
            description:'',
            body:'',
        }
     }
    },
}
</script>
<style>
    
</style>