import Vue from 'vue'
import Vuex from 'vuex'
import VueXAlong from 'vuex-along'



Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        userData:{},
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                size: 18, // icon大小
                type: 'md-globe',
                name: 'epidemicMap', // 要跳转的路由名称 不是路径
                text: '疫情地图', // 文本内容
            },
            {
                size: 18, // icon大小
                type: 'ios-copy',
                name: 'regionCase', // 要跳转的路由名称 不是路径
                text: '各地区病例', // 文本内容
            },
            // {
            //     type: 'ios-grid',
            //     name: 'dormitoryInteriorList',
            //     text: '宿舍内务信息管理',
            // },
            // {
            //     type: 'ios-grid',
            //     name: 'associationApprovalList',
            //     text: '社团活动申请',
            // },
            // {
            //     type: 'ios-grid',
            //     name: 'classroomApplyList',
            //     text: '教室申请',
            // },
            // {
            //     type: 'ios-grid',
            //     name: 'libraryApplyList',
            //     text: '图书馆申请',
            // },
            // {
            //     type: 'ios-grid',
            //     name: 'exhibitionBoardList',
            //     text: '展板申请',
            // },
            // {
            //     type: 'ios-grid',
            //     name: 'lectureHallApplyList',
            //     text: '学术报告厅申请',
            // },
            // {
            //     type: 'ios-grid',
            //     name: 'communityVenueApplyList',
            //     text: '活动场地申请',
            // },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        updateUserData(state,val){
            state.userData=val
        },
        updateEpidemicData(state,val){
            state.epidemicData=val
        },
        updateDayList(state,val){
            state.DayList=val
        }
    },
    plugins: [VueXAlong({
        name: 'along',     //存放在localStroage或者sessionStroage 中的名字
        local: false,      //是否存放在local中  false 不存放 如果存放按照下面session的配置配
        session: { list: [], isFilter: true } //如果值不为false 那么可以传递对象 其中 当isFilter设置为true时， list 数组中的值就会被过滤调,这些值不会存放在seesion或者local中
    })]
})

export default store
