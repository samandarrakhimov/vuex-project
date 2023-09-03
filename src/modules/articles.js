import ArticlesService from "../service/articles"
const state = {
    isLoading : false,
    data : null,
    errors: null,
    articleDetail : null
}
const mutations = {
  articlesStart(state){
    state.data = null,
    state.articleDetail = null,
    state.isLoading = true,
    state.errors = null
  },
  articlesSuccess(state,payload){
    state.isLoading = false,
    state.data = payload
    
  },
  articlesFailure(state){
    state.isLoading = false
  },
  articleDetailStart(state){
    state.data = null,
    state.isLoading = true,
    state.articleDetail = null,
    state.errors = null
  },
  articleDetailSuccess(state, payload){
    state.isLoading = false,
    state.articleDetail = payload
    
    
  },
 
}
const actions = {
    articles(context){
        return new Promise((resolve,) => {
          context.commit('articlesStart') 
           ArticlesService.articles().then(response => {
            context.commit('articlesSuccess', response.data.articles)
            resolve(response.data.articles)
           }).catch(() => {
            context.commit('articlesFailure')
           })
        })
    },
    articleDetail(context, slug){
    return new Promise((resolve) => {
      context.commit('articleDetailStart')
      ArticlesService.articleDetail(slug).then(response => {
        context.commit('articleDetailSuccess', response.data.article)
        console.log(response.data.article);
        resolve(response.data.article)
      }).catch(() => {
        context.commit('articlesFailure')
      })
    })
    },
}



export default {
    state,
    mutations,
    actions,
}