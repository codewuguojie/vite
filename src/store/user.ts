import { defineStore } from 'pinia'
import Vue from 'vue'

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: 'wugj',
            userInfo: {}
        }
    },
    actions: {
        updateName(name: string) {
            this.name = name
        },
        Login(userInfo: Object) {
            Vue.ls.set('USER_INFO', userInfo)
            this.userInfo = userInfo
        }
    }
})