
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import uiCompanents from './ui-companents'
import store from './store'



const app = createApp(App)
 
app.use(router)
app.use(store)

uiCompanents.map(component => app.component(component.name, component))

app.mount('#app')
