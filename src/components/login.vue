<template>
    <main class="form-siginig w-sm-75% w-md-25 m-auto pt-5">
    <form>

    <h1 class="font-monospace fw-bold text-center ms-md-5 mb-3">Login</h1>

    <Input :label="'Email address'" :type="'email'" v-model="email" />
    <Input :label="'Password'" :type="'password'" v-model="password" />

    <Button type="submit" :disabled="isLoading" @click="submitHandler" >Login</Button>
    
    
    
  </form>
</main>
</template>

<script>
import { mapState } from 'vuex';
import { logo} from '../constants'
export default {
    data() {
        return {
            logo,
            email : '',
            password : '',
        }
    },
    computed:{
        ...mapState({
            isLoading: state => state.auth.isLoading
        })
    },
    methods: {
        submitHandler(e){
        e.preventDefault()
        const data = {
            username: this.username,
            email : this.email,
            password : this.password,
        }
         this.$store
         .dispatch('login', data).then(user => {
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