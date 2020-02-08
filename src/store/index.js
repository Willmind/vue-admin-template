import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                type: 'ios-clipboard',
                name: 'dormitoryInteriorList',
                text: '宿舍内务信息管理',
            },
            {
                type: 'md-bicycle', // icon类型
                text: '社团活动管理', // 文本内容
                children:[
                    {

                        name: 'classroomApplyList',
                        text: '教室',
                    },
                    {
                        name: 'libraryApplyList',
                        text: '图书馆',
                    },
                    {
                        name: 'lectureHallApplyList',
                        text: '学术报告厅',
                    },
                    {
                        name: 'exhibitionBoardList',
                        text: '展板',
                    },
                    {
                        name: 'communityVenueApplyList',
                        text: '场地',
                    },
                    {
                        name: 'associationApprovalList',
                        text: '活动',
                    },

                ]
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
    },
})

export default store
