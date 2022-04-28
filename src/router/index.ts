import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import exp from "constants";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            keepalive: true,
            requireAuth: false
        },
        component: () => import('@/views/login.vue')
    },
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页',
            keepalive: true,
            requireAuth: false
        },
        component: () => import('@/views/index.vue')
    },
    {
        path: '/vueUse',
        name: 'vueUse',
        meta: {
            title: 'demo',
            keepalive: false,
            requireAuth: false
        },
        component: () => import('@/views/vueUse.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router