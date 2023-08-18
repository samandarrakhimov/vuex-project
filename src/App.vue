
 <template>
<div class="container">
    <Navbar/>
    <RouterView/>
  </div>
 </template>
 <script>

 import { RouterView } from 'vue-router'
  import Navbar from '@/components/navbar.vue';
  export default {
    components:{ Navbar, },
    mounted() {
      this.$store.dispatch('getuser')
    },
    
  }
  
 </script>
 <style>
  
 </style>