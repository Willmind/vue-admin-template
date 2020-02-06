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

                        name: 'associationApproval',
                        text: '社团活动审批',
                    },
                    {

                        name: 'exhibitionBoard',
                        text: '社团联合会展板',
                    },
                    {

                        name: 'communityVenueApply',
                        text: '社团活动场地',
                    },
                    {

                        name: 'lectureHallApply',
                        text: '大学生学术报告厅',
                    },
                    {

                        name: 'libraryApply',
                        text: '图书馆学术报告厅',
                    },
                    {

                        name: 'classroomApply',
                        text: '教室',
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
