import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '主页' },
        component: () => import('../views/Home.vue'),
    },
    t1: {
        path: 't1',
        name: 't1',
        meta: { title: '表格' },
        component: () => import('../views/T1.vue'),
    },
    password: {
        path: 'password',
        name: 'password',
        meta: { title: '修改密码' },
        component: () => import('../views/Password.vue'),
    },
    msg: {
        path: 'msg',
        name: 'msg',
        meta: { title: '通知消息' },
        component: () => import('../views/Msg.vue'),
    },
    userinfo: {
        path: 'userinfo',
        name: 'userinfo',
        meta: { title: '用户信息' },
        component: () => import('../views/UserInfo.vue'),
    },
    dormitoryInteriorList: {
        path: 'dormitoryInteriorList',
        name: 'dormitoryInteriorList',
        meta: { title: '宿舍内务信息管理' },
        component: () => import('../views/dormitoryInteriorList.vue'),
    },


    libraryApplyList: {
        path: 'associationList/libraryApplyList',
        name: 'libraryApplyList',
        meta: { title: '图书馆申请' },
        component: () => import('../views/associationList/libraryApplyList.vue'),
    },

    classroomApplyList: {
        path: 'associationList/classroomApplyList',
        name: 'classroomApplyList',
        meta: { title: '教室申请' },
        component: () => import('../views/associationList/classroomApplyList.vue'),
    },

    lectureHallApplyList: {
        path: 'associationList/lectureHallApplyList',
        name: 'lectureHallApplyList',
        meta: { title: '学术报告厅申请' },
        component: () => import('../views/associationList/lectureHallApplyList.vue'),
    },

    exhibitionBoardList: {
        path: 'associationList/exhibitionBoardList',
        name: 'exhibitionBoardList',
        meta: { title: '展板' },
        component: () => import('../views/associationList/exhibitionBoardList.vue'),
    },




}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
