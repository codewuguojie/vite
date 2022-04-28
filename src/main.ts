import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store";
import router from "@/router";
import Storage from 'vue-ls'

const storageOptions = {
    namespace: 'vue_', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local', // storage name session, local, memory
}

createApp(App).use(store).use(router).use( Storage, storageOptions).mount('#app')
