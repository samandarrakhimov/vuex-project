<template>
    <div class="container">
        <h1 class="fw-700 font-sens-serif mb-3">Lusto autem aut consequator</h1>
       <div class="row">
        <div class=" col-11 col-md-8 offset-md-0">
          <h5 class=" mb-1">Descrption:</h5>
          <p>{{article.description}}</p>
        </div>
        <div class="col-6 col-md-2">
         <p>Created at:</p>
         <p>{{ new Date(article.createdAt).toLocaleDateString('us') }}</p>
        </div>
        <div class="col-6 col-md-2">
         <p>Updated at:</p>
         <p>{{ new Date(article.updatedAt).toLocaleDateString('us') }}</p>
        </div>
        <div class="col-8 offset-2  col-md-5 offset-md-0">
       <p class="rounded-5 bg-primary text-center " style="display: inline-block; height: 60px; width: 60px; ">
        <p class="mt-3 text-white fw-bold text-uppercase">
            {{article.author.username[0]}}
        </p>
       </p>
       <span class="fw-bold text-capitalize offset-1">{{ article.author.username }}</span>
         <p class="opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed in repellat maxime eligendi ipsum rem tempore. Voluptatum, impedit animi!</p>
       </div>
        <div class="col-12 col-md-6">
         <p class="fw-bold">Body:</p>
         <p class="opacity-75">{{article.body}}</p>
       </div>
       </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            article: state => state.articles.articleDetail       
         })
    }
}
</script>
<style>
    
</style>