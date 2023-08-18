<template>
    <div v-if="isLoading">
        <Loader/>
    </div>
    <div class=" d-flex row-cols-2 flex-wrap " v-else>
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
}
 
</script>
<style>
    
</style>