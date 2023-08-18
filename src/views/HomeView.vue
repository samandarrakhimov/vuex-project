<template>
    <div v-if="isLoading">
        <Loader/>
    </div>
    <div  v-else class=" d-flex row-cols-2 flex-wrap ">
       <Articlecard v-for="article in data" :article="article" :key="article.id"/>
    </div>
</template>
<script>

import Articlecard from '../components/Articlecard.vue';
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState({
          data: state => state.articles.data,
          isLoading : state => state.articles.isLoading
        })
    },
    components: {Articlecard},
    mounted() {
        this.$store.dispatch('articles')
    },
}
 
</script>
<style>
    
</style>