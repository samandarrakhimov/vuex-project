import { createRouter, createWebHistory } from 'vue-router'
import  RegisterView  from '../views/RegisterView.vue'
import  HomeView  from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import CreateArticleView from '../views/CreateArticleView.vue'
import EditArticleView from '../views/EditArticleView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:`/`,
      name:`home`,
      component: HomeView
     },
   {
    path:`/register`,
    name:`register`,
    component: RegisterView
   },
   {
    path:`/login`,
    name:`login`,
    component: LoginView
   },
   {
    path:`/article/:slug`,
    name:`article-details`,
    component: ArticleDetailView
   },
   {
    path:`/create-article`,
    name:`create-article`,
    component: CreateArticleView
   },
   {
    path:`/edit-article/:slug`,
    name:`edit-article`,
    component: EditArticleView
   },
   

  ]
})

export default router
