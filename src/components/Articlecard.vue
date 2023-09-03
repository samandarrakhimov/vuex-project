<template>
        <div class=" ofsset-sm-1 ofsset-md-0 col-sm-11 col-md-4   ">
          <div class="card shadow-sm  w-xs-100 mb-3 w-md-100">
            <svg class="bd-placeholder-img card-img-top" width="90%" height="230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
            <div class="card-body">
              <p class="card-text">{{ article.title }}</p>
              <p class="card-title">{{ article.body.slice(0,200) }}</p>
              <div class="d-flex justify-content-between   align-items-center card-footer">
                <div class="btn-group ">
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click="navigateHandler" :disabled="isLoading">
                    Read Article
                </button>
                  <button
                  v-if="article?.author?.username == user?.username"
                   type="button" class="btn btn-sm  btn-outline-danger"
                    :disabled="isLoading"
                    @click="removeArticleHandler"
                    >Delete</button>
                    <button 
                    v-if="article?.author?.username == user?.username"
                   type="button" class="btn btn-sm btn-outline-success me-sm-4 me-md-0"
                    :disabled="isLoading"
                    @click="editArticleHandler"
                    >Edit</button>
                </div>
                <small class="text-body-secondary"> {{ new Date(article.createdAt).toLocaleDateString('us') }}</small>
              </div>
            </div>
          </div>
        </div>  
    
</template>
<script>
import { mapState } from'vuex';
export default {
    props:{
        article:{
            type:Object,
            required:true
        }
    },
    computed:{
        ...mapState({
            user: state => state.auth.user,
            isLoading: state => state.control.isLoading
        }),
    },
    methods: {
         navigateHandler(){
            return this.$router.push(`/article/${this.article.slug}`)
         },
         removeArticleHandler(){
          return this.$store.
          dispatch('removeArticle', this.article.slug).then(() => {
          this.$store.dispatch('articles')
          })
         },
         editArticleHandler(){
          return this.$router.push(`edit-article/${this.article.slug}`)
         }
        },
}
</script>
<style>
    
</style>