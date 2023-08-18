<template>
    <div>
        <div class=" container d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <a href="/" @click="toHomehandler" style="width: 100px;" class="d-flex align-items-center link-body-emphasis text-decoration-none">
       <img :src="logo" alt="logo" style="width: 100px;">
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <template v-if="isLogedin">
            <RouterLink :to="{name:'create-article'}" class="me-3 py-2 link-body-emphasis text-decoration-none fw-400 fs-5" >
            Create-Article
           </RouterLink>
            <RouterLink :to="{name:'home'}" class="me-3 py-2 link-body-emphasis text-decoration-none" 
            style="background-color: dimgrey; border-radius: 50%; width: 55px; height:55px ; text-align: center;"  >
              <i class="fa-solid fa-user" style="font-size: 30px; margin-top: 2px;"></i>
           </RouterLink>
           <a @click="logout" class="me-3 py-2 link-body-emphasis text-decoration-none" >
            <i class="fa-solid fa-arrow-right-from-bracket" style="font-size: 30px;"></i>
           </a>
           

          </template>
          <template v-if="!isLogedin">
            <RouterLink :to="{name:'login'}">
              <button type="button" class="btn btn-outline-primary me-2 py-2">Login</button></RouterLink>
          <RouterLink :to="{name:'register'}" >
            <button type="button" class="btn btn-primary me-2 py-2">Register</button></RouterLink>
          </template>
          
      </nav>
    </div>
    </div>
   </template>
   <script>
   import { mapState } from 'vuex'
   import { logo, profile} from '../constants'
   export default {
    data() {
        return {
            logo,
            profile,
        }
    },
    computed:{
     ...mapState({
        user: state => state.auth.user,
        isLogedin: state => state.auth.isLogedin
     })
    },
   
    methods: {
        toHomehandler() {
            this.router.push({name:'home'})
        },
        logout(){
            this.$store.dispatch('logout')
        }
    },
   }
   </script>
   <style>
    
   </style>