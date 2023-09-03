<template>
    <main class="form-siginig w-md-50% w-md-25 m-auto pt-5">
    <form>

    <h1 class="font-monospace fw-bold  mb-3" style="width: 500px; margin-left: 100px;">Register</h1>
    <ValidationErrors v-if="validationErrors" :validationErrors="validationErrors"/>
     
    <Input :label="'Name'" :type="'text'" v-model="username" />
    <Input :label="'Email address'" :type="'email'" v-model="email" />
    <Input :label="'Password'" :type="'password'" v-model="password" />

    <Button type="submit" :disabled="isLoading" @click="submitHandler" >Register</Button>
    
    
    
  </form>
</main>
</template>

<script>
import ValidationErrors from './ValidationErrors.vue';
import { mapState } from 'vuex';
import { logo} from '../constants'
export default {
    components:{ValidationErrors},
    data() {
        return {
            logo,
            username : '',
            email : '',
            password : '',
        }
    },
    computed:{
        ...mapState({
            isLoading: state => state.auth.isLoading,
            validationErrors : state => state.auth.errors,
        })
    },
    methods: {
        submitHandler(e){
        e.preventDefault()
        const data = {
            username : this.username,
            email : this.email,
            password : this.password,
        }
         this.$store.dispatch('register', data).then(user => {
            this.$router.push({name: 'home'})
            console.log("USER", user);
         }
         ).catch(err => {
            console.log("ERRORS", err);
         })

        }
    },
    
}
   
</script>
<style>
    
</style>