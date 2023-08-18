
import axios from './axios.js'

const ArticlesService = {
    articles(){
        return axios.get('/articles')
    },
    articleDetail(slug){
        return axios.get(`/articles/${slug}`)
    },
    craeteArticle(article){
        return axios.post('/articles', {article})
    },
    removeArticle(slug){
        return axios.delete(`/articles/${slug}`)
    },
    EditArticle(article,slug){
        return axios.put(`/articles/${slug}`, {article})
    }
}

export default ArticlesService