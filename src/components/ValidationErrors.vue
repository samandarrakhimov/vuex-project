<template>
    <ul class="text-center list-unstyled">
        <li class="list-group-item list-group-item-danger"
        v-for="errorMasage in errorMasages"
        :key="errorMasage"
        >
         {{ errorMasage }}
        </li>
    </ul>
</template>
<script>
export default {
   props: {
    validationErrors: {
        type: Object,
        required:true,
    },
   },
   computed:{
    errorMasages(){
       return Object.keys(this.validationErrors).map(name => {
        const msg = this.validationErrors[name].join(', ')
         return `${name} ${msg}`
       })
    },
   },
}
</script>
<style>
    
</style>