import { createRouter, createWebHashHistory } from 'vue-router'

const Demand = () => import(/* webpackChunkName: "demand" */ '@/pages/demand/index.vue')
const OrderList = () => import(/* webpackChunkName: "orderList" */ '@/pages/orderList/index.vue')

const routes = [
    {
        path: '/',
        name: 'Demand',
        component: Demand,
        meta: {
            title: 'Demand',
            keepAlive: false
        }
    },{
        path: '/orderList',
        name: 'OrderList',
        component: OrderList,
        meta: {
            title: 'OrderList',
            keepAlive: false
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
