<template>
    <div style="width: 900px; margin: auto;">
       <form @submit.prevent>
        <Input type="text" label="title" v-model="title" />
        <Textare type="text" label="description" v-model="description"/>
        <Textare type="text" label="body" v-model="body"/>
        <Button @click="submitHandler" :disabled="isLoading">{{ clickText }}</Button>
       </form>
        </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props:{
        intialValue:{
         type:Object,
         required:true
        },
        submitHandler:{
            type:Function,
            required:true
        },
        clickText:{
        type:String,
        required:true
        }
    },
    methods: {
        submitHandler(){
            const article = {
            title:this.title,
            description:this.description,
            body:this.body,
           taglist:[]
}
    this.submitHandler(article)
}
    },
    data() {
        return {
        title:this.intialValue.title,
        description:this.intialValue.description,
        body:this.intialValue.body,
        isEdit:false
        }
    },
    computed:{
        ...mapState({
            isLoading: state => state.control.isLoading
        })
    }
}
</script>