 import ArticlesService from "../service/articles"
 const state = {
  isLoading : false
}


const mutations = {
    cotrolArticleStart(state){
       state.isLoading = true
    },
    cotrolArticleSuccess(state){
        state.isLoading = false  
     },
     cotrolArticleFailure(state){
        state.isLoading = false  
     }
}

const actions = {
   createArticle(context, article){
    return new Promise(resolve => {
        context.commit('cotrolArticleStart')
       ArticlesService.craeteArticle(article)
       .then(() => {
        context.commit('cotrolArticleSuccess')
        resolve()
      })
       .catch(() => {context.commit('cotrolArticleFailure')}) 
    })
   },
   removeArticle(context, slug){
     return new Promise(resolve => {
        context.commit('cotrolArticleStart')
        ArticlesService.removeArticle(slug)
        .then(() => {
        context.commit(' cotrolArticleSuccess')
        resolve()
    })
        .catch(() => {context.commit('cotrolArticleFailure')})
     })
   },
   EditArticle(context, data){
    return new Promise(resolve => {
        context.commit('cotrolArticleStart')
      ArticlesService.EditArticle(data.article, data.slug)
      .then(() => {
        context.commit('cotrolArticleSuccess')
        resolve() 
      })
      .catch(() => {context.commit('cotrolArticleFailure')})
      
    })
    }
}

export default {
    state,
    mutations,
    actions
}


