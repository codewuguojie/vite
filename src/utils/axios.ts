import Vue from 'vue'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const service = axios.create({
    timeout: 5000
})

service.interceptors.request.use(
    (config:AxiosRequestConfig) => {
        // let token = Vue.ls.get
        return config
    },
    (error: any) => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    async (response: AxiosResponse) => {

    },
    (error: any) => {
        return Promise.reject(error)
    }
)

export default service