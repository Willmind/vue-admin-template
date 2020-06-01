import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            keepAlive: true
        },
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: {title: '404'},
        component: () => import('../components/404.vue'),
    },
    {path: '/', redirect: '/home'},
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: {
            title: '主页',
            keepAlive: true
        },
        component: () => import('../views/Home.vue'),
    },
    regionCase: {
        path: 'regionCase',
        name: 'regionCase',
        meta: {
            title: '各地区病例',
            keepAlive: true
        },
        component: () => import('../views/regionCase.vue'),
    },
    epidemicMap: {
        path: 'epidemicMap',
        name: 'epidemicMap',
        meta: {
            title: '疫情地图',
            keepAlive: true
        },
        component: () => import('../views/epidemicMap.vue'),
    },
    realTimeBroadcast: {
        path: 'realTimeBroadcast',
        name: 'realTimeBroadcast',
        meta: {
            title: '实时播报',
            keepAlive: true
        },
        component: () => import('../views/realTimeBroadcast.vue'),
    },
    moveList: {
        path: 'moveList',
        name: 'moveList',
        meta: {
            title: '迁徙数据',
            keepAlive: true
        },
        component: () => import('../views/moveList.vue'),
    },
    susList: {
        path: 'susList',
        name: 'susList',
        meta: {
            title: '辟谣与防护',
            keepAlive: true
        },
        component: () => import('../views/susList.vue'),
    },


    ////////////////////////////////////////
    dormitoryInteriorList: {
        path: 'dormitoryInteriorList',
        name: 'dormitoryInteriorList',
        meta: {title: '宿舍内务信息管理'},
        component: () => import('../views/dormitoryInteriorList.vue'),
    },

    classroomApplyList: {
        path: 'associationList/classroomApplyList',
        name: 'classroomApplyList',
        meta: {title: '教室申请'},
        component: () => import('../views/associationList/classroomApplyList.vue'),
    },

    associationApprovalList: {
        path: 'associationList/associationApprovalList',
        name: 'associationApprovalList',
        meta: {title: '社团活动申请'},
        component: () => import('../views/associationList/associationApprovalList.vue'),
    },

    libraryApplyList: {
        path: 'associationList/libraryApplyList',
        name: 'libraryApplyList',
        meta: {title: '图书馆申请'},
        component: () => import('../views/associationList/libraryApplyList.vue'),
    },
    exhibitionBoardList: {
        path: 'associationList/exhibitionBoardList',
        name: 'exhibitionBoardList',
        meta: {title: '展板申请'},
        component: () => import('../views/associationList/exhibitionBoardList.vue'),
    },

    lectureHallApplyList: {
        path: 'associationList/lectureHallApplyList',
        name: 'lectureHallApplyList',
        meta: {title: '学术报告厅申请'},
        component: () => import('../views/associationList/lectureHallApplyList.vue'),
    },
    communityVenueApplyList: {
        path: 'associationList/communityVenueApplyList',
        name: 'communityVenueApplyList',
        meta: {title: '活动场地申请'},
        component: () => import('../views/associationList/communityVenueApplyList.vue'),
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
