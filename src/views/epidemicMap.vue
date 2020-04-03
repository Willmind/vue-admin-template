<template>
    <div style="height: 800px;">

        <div style="display: flex;justify-content: center;align-items: center">
            <div style="width:800px;height:700px;padding: 10px;">
                <el-tabs v-model="activeTab" type="border-card">
                    <el-tab-pane name="China">
                        <span slot="label">
                            <i class="iconfont icon-zhongguo"></i>
                            全国疫情地图
                        </span>

                        <el-tabs>
                            <el-tab-pane label="现有确诊">
                                <div style="width:600px;height:600px; " id="myCharts3" ref="myCharts3"></div>
                            </el-tab-pane>

                            <el-tab-pane label="累计确诊">
                                <div style="width:600px;height:600px;" id="myCharts1" ref="myCharts1"></div>
                            </el-tab-pane>


                        </el-tabs>

                    </el-tab-pane>

                    <el-tab-pane name="world">
                        <span slot="label"><i class="iconfont icon-world"></i> 海外疫情地图</span>
                        <el-tabs>

                            <el-tab-pane label="新增确诊">
                                <div style="width:700px;height:600px; " id="myCharts4" ref="myCharts4"></div>

                            </el-tab-pane>
                            <el-tab-pane label="累计确诊">
                                <div style="width:700px;height:600px; " id="myCharts2" ref="myCharts2"></div>
                            </el-tab-pane>

                        </el-tabs>

                    </el-tab-pane>


                </el-tabs>
            </div>
        </div>


    </div>

</template>

<script>

    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: "epidemicMap",
        computed: {
            ...mapState(
                {
                    userData: 'userData',
                    epidemicData: 'epidemicData',
                }
            )
        },
        data() {
            return {
                activeTab: 'China',

                cn_econNumList: [],
                cn_conNumList:[],

                otherlistObject: [],
                conObject: {},

                otherlistObject2:[],

                areaDataList: [],
                areaDataList2: [],

            }

        },
        methods: {
            initCharts2() {
                const myCharts2 = this.$echarts.init(this.$refs.myCharts2);
                let dataList = this.areaDataList
                let option = {
                    borderWidth:'1',
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    backgroundColor:'rgb(243,243,243)',
                    title: {
                        top:'20',
                        left:'20',
                        text: '全球疫情累计确诊地图',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {
                        right:'20',
                        top:'20',
                        show: true,
                        feature: {
                            saveAsImage: {
                                show: true,
                                excludeComponents: ['toolbox'],
                                pixelRatio: 2
                            },
                            dataView: { //数据视图
                                show: true,
                            },
                            restore: { //重置
                                show: true
                            },
                        }
                    },
                    tooltip: {

                        backgroundColor: '#ffffff',
                        extraCssText: 'box-shadow: 0 2px 20px rgba(0, 0, 0, .1);',
                        textStyle: {
                            color: '#000000',
                        },
                        formatter: function (params, ticket, callback) {
                            return params.seriesName + '<br />' + params.name + '：' + params.value + '人'
                        },//数据格式化

                    },
                    visualMap: {
                        left:"15",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
                        bottom:"15",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
                        right:"auto",                               //组件离容器右侧的距离,'20%'
                        showLabel:true,
                        show: true,//图注
                        type: 'piecewise',
                        text: ['高', '低'],//取值范围的文字
                        pieces: [
                            //自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                            {min: 10000,label: '>10000人',color:'rgb(127,17,0)'},
                            {min: 1000, max: 9999,label: '1000-9999人',color:'rgb(189,19,22)'},
                            {min: 500, max: 999,label: '500-999人',color:'rgb(230,75,69)'},
                            {min: 100, max: 499,label: '100-499人',color:'rgb(255,140,113)'},
                            {min: 10, max: 99,label: '10-99人',color:'rgb(253,210,160)'},
                            {min: 1, max: 9, label: '1-9人',color:'rgb(255,242,207)'},
                            {min:0,max: 0,label:'0',color:'white'}                        // 不指定 min，表示 min 为无限大（-Infinity）。
                        ],


                    },
                    geo: {
                        map: 'world',
                        roam: false,//不开启缩放和平移
                        zoom: 1.23,//视角缩放比例
                        label: {
                            normal: {
                                // show: true,
                                fontSize: '10',
                                color: 'rgba(0,0,0,0.7)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(0, 0, 0, 0.2)'
                            },
                            emphasis: {
                                areaColor: '#F3B329',//鼠标选择区域颜色
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    series: [
                        {

                            name: '累计确诊',
                            mapType: 'world',
                            type: 'map',
                            geoIndex: 0,
                            data: dataList,

                        }
                    ]
                };
                myCharts2.setOption(option);
                myCharts2.on('click', function (params) {
                    alert(params.name);
                });


            },
            initCharts4() {
                const myCharts4 = this.$echarts.init(this.$refs.myCharts4);
                let dataList = this.areaDataList2
                let option = {
                    borderWidth:'1',
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    backgroundColor:'rgb(243,243,243)',
                    title: {
                        top:'20',
                        left:'20',
                        text: '全球疫情新增确诊地图',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {
                        right:'20',
                        top:'20',
                        show: true,
                        feature: {
                            saveAsImage: {
                                show: true,
                                excludeComponents: ['toolbox'],
                                pixelRatio: 2
                            },
                            dataView: { //数据视图
                                show: true,
                            },
                            restore: { //重置
                                show: true
                            },
                        }
                    },
                    tooltip: {

                        backgroundColor: '#ffffff',
                        extraCssText: 'box-shadow: 0 2px 20px rgba(0, 0, 0, .1);',
                        textStyle: {
                            color: '#000000',
                        },
                        formatter: function (params, ticket, callback) {
                            return params.seriesName + '<br />' + params.name + '：' + params.value + '人'
                        },//数据格式化

                    },
                    visualMap: {
                        left:"15",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
                        bottom:"15",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
                        right:"auto",                               //组件离容器右侧的距离,'20%'
                        showLabel:true,
                        show: true,//图注
                        type: 'piecewise',
                        text: ['高', '低'],//取值范围的文字
                        pieces: [
                            //自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                            {min: 10000,label: '>10000人',color:'rgb(127,17,0)'},
                            {min: 1000, max: 9999,label: '1000-9999人',color:'rgb(189,19,22)'},
                            {min: 500, max: 999,label: '500-999人',color:'rgb(230,75,69)'},
                            {min: 100, max: 499,label: '100-499人',color:'rgb(255,140,113)'},
                            {min: 10, max: 99,label: '10-99人',color:'rgb(253,210,160)'},
                            {min: 1, max: 9, label: '1-9人',color:'rgb(255,242,207)'},
                            {min:0,max: 0,label:'0',color:'white'}                        // 不指定 min，表示 min 为无限大（-Infinity）。
                        ],


                    },
                    geo: {
                        map: 'world',
                        roam: false,//不开启缩放和平移
                        zoom: 1.23,//视角缩放比例
                        label: {
                            normal: {
                                // show: true,
                                fontSize: '10',
                                color: 'rgba(0,0,0,0.7)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(0, 0, 0, 0.2)'
                            },
                            emphasis: {
                                areaColor: '#F3B329',//鼠标选择区域颜色
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    series: [
                        {

                            name: '新增确诊',
                            mapType: 'world',
                            type: 'map',
                            geoIndex: 0,
                            data: dataList,

                        }
                    ],
                    grid:{
                        x:35,
                        y:25,
                        x2:25,
                        y2:35,
                    }
                };
                myCharts4.setOption(option);
                myCharts4.on('click', function (params) {
                    alert(params.name);
                });


            },

            initCharts1() {
                const myCharts1 = this.$echarts.init(this.$refs.myCharts1);
                let dataList =this.cn_conNumList;
                let option = {
                    borderWidth:'1',
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    backgroundColor:'rgb(243,243,243)',
                    title: {
                        top:'20',
                        left:'20',
                        text: '全国疫情累计确诊地图',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {
                        right:'20',
                        top:'20',
                        showTitle: true,
                        show: true,
                        feature: {
                            saveAsImage: {
                                show: true,
                                excludeComponents: ['toolbox'],
                                pixelRatio: 2
                            },
                            dataView: { //数据视图
                                show: true,
                            },
                            restore: { //重置
                                show: true
                            },

                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        extraCssText: 'box-shadow: 0 2px 20px rgba(0, 0, 0, .1);',
                        textStyle: {
                            color: '#000000',
                        },
                        formatter: function (params, ticket, callback) {
                            return params.seriesName + '<br />' + params.name + '：' + params.value + '人'
                        }//数据格式化
                    },
                    visualMap: {
                        left:"15",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
                        bottom:"15",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
                        right:"auto",                               //组件离容器右侧的距离,'20%'
                        showLabel:true,
                        show: true,//图注
                        type: 'piecewise',
                        text: ['高', '低'],//取值范围的文字
                        pieces: [
                            //自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                            {min: 10000,label: '>10000人',color:'rgb(127,17,0)'},
                            {min: 1000, max: 9999,label: '1000-9999人',color:'rgb(189,19,22)'},
                            {min: 500, max: 999,label: '500-999人',color:'rgb(230,75,69)'},
                            {min: 100, max: 499,label: '100-499人',color:'rgb(255,140,113)'},
                            {min: 10, max: 99,label: '10-99人',color:'rgb(253,210,160)'},
                            {min: 1, max: 9, label: '1-9人',color:'rgb(255,242,207)'},
                            {min:0,max: 0,label:'0',color:'white'}                        // 不指定 min，表示 min 为无限大（-Infinity）。
                        ],


                    },

                    geo: {
                        map: 'china',
                        roam: false,//不开启缩放和平移
                        zoom: 1.23,//视角缩放比例
                        label: {
                            normal: {
                                show: true,
                                fontSize: '10',
                                color: 'rgba(0,0,0,0.7)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(0, 0, 0, 0.2)'
                            },
                            emphasis: {
                                areaColor: '#F3B329',//鼠标选择区域颜色
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    series: [
                        {
                            name: '累计确诊',
                            type: 'map',
                            geoIndex: 0,
                            data: dataList
                        }
                    ]
                };
                myCharts1.setOption(option);
                myCharts1.on('click', function (params) {
                    alert(params.name);
                });

            },
            initCharts3() {
                const myCharts3 = this.$echarts.init(this.$refs.myCharts3);
                let dataList = this.cn_econNumList
                let option = {
                    borderWidth:'1',
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    backgroundColor:'rgb(243,243,243)',
                    title: {
                        top:'20',
                        left:'20',
                        text: '全国疫情现有确诊地图',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {
                        right:'20',
                        top:'20',
                        showTitle: true,
                        show: true,
                        feature: {

                            saveAsImage: {
                                show: true,
                                excludeComponents: ['toolbox'],
                                pixelRatio: 2
                            },
                            dataView: { //数据视图
                                show: true,
                            },
                            restore: { //重置
                                show: true
                            },

                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        extraCssText: 'box-shadow: 0 2px 20px rgba(0, 0, 0, .1);',
                        textStyle: {
                            color: '#000000',
                        },
                        formatter: function (params, ticket, callback) {
                            return params.seriesName + '<br />' + params.name + '：' + params.value + '人'
                        }//数据格式化
                    },
                    visualMap: {
                        left:"15",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
                        bottom:"15",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
                        right:"auto",                               //组件离容器右侧的距离,'20%'
                        showLabel:true,
                        show: true,//图注
                        type: 'piecewise',
                        text: ['高', '低'],//取值范围的文字
                        pieces: [
                            //自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                            {min: 10000,label: '>10000人',color:'rgb(127,17,0)'},
                            {min: 1000, max: 9999,label: '1000-9999人',color:'rgb(189,19,22)'},
                            {min: 500, max: 999,label: '500-999人',color:'rgb(230,75,69)'},
                            {min: 100, max: 499,label: '100-499人',color:'rgb(255,140,113)'},
                            {min: 10, max: 99,label: '10-99人',color:'rgb(253,210,160)'},
                            {min: 1, max: 9, label: '1-9人',color:'rgb(255,242,207)'},
                            {min:0,max: 0,label:'0',color:'white'}                        // 不指定 min，表示 min 为无限大（-Infinity）。
                        ],


                    },
                    // dataRange: {//颜色的变化设置
                    //     x: 'left',
                    //     y: 'bottom',
                    //     splitList: [
                    //         {start: 1500},
                    //         {start: 900, end: 1500},
                    //         {start: 310, end: 1000},
                    //         {start: 200, end: 300},
                    //         {start: 10, end: 200, label: '10 到 200（自定义label）'},
                    //         {start: 5, end: 5, label: '5（自定义特殊颜色）', color: 'black'},
                    //         {end: 10}
                    //     ],
                    // },
                    geo: {
                        map: 'china',
                        roam: false,//不开启缩放和平移
                        zoom: 1.23,//视角缩放比例
                        label: {
                            normal: {
                                show: true,
                                fontSize: '10',
                                color: 'rgba(0,0,0,0.7)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(0, 0, 0, 0.2)'
                            },
                            emphasis: {
                                areaColor: '#F3B329',//鼠标选择区域颜色
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    series: [
                        {
                            name: '现有确诊',
                            type: 'map',
                            geoIndex: 0,
                            data: dataList
                        }
                    ]
                };
                myCharts3.setOption(option);
                myCharts3.on('click', function (params) {
                    alert(params.name);
                });

            },

        },
        mounted() {
            let mapData = require('./../assets/json/mapData')
            const invertKeyValues = obj =>
                Object.keys(obj).reduce((acc, key) => {
                    acc[obj[key]] = key;
                    return acc;
                }, {});
            let mapCurrent = invertKeyValues(mapData)


            for (var i = 0; i < this.epidemicData.list.length; i++) {
                this.cn_conNumList.push({
                    name: this.epidemicData.list[i].name,
                    value:parseInt(this.epidemicData.list[i].value),
                })
            }

            for (var i = 0; i < this.epidemicData.list.length; i++) {
                this.cn_econNumList.push({
                    name: this.epidemicData.list[i].name,
                    value:parseInt(this.epidemicData.list[i].econNum),
                })

            }

            console.log(this.cn_econNumList);


            for (var i = 0; i < this.epidemicData.otherlist.length; i++) {
                this.otherlistObject.push({name: this.epidemicData.otherlist[i].name, value: this.epidemicData.otherlist[i].conNum})
            }

            for (var i = 0; i < this.otherlistObject.length; i++) {
                this.areaDataList.push({
                    name: mapCurrent[this.otherlistObject[i].name],
                    value: this.otherlistObject[i].value
                })

            }
            this.areaDataList.push({
                name: 'China',
                value: this.epidemicData.gntotal
            })

            /////////////////////////////////////////////////

            for (var i = 0; i < this.epidemicData.otherlist.length; i++) {
                this.otherlistObject2.push({name: this.epidemicData.otherlist[i].name, value: this.epidemicData.otherlist[i].conadd})
            }

            for (var i = 0; i < this.otherlistObject2.length; i++) {
                this.areaDataList2.push({
                    name: mapCurrent[this.otherlistObject2[i].name],
                    value: this.otherlistObject2[i].value
                })

            }
            this.areaDataList2.push({
                name: 'China',
                value: this.epidemicData.add_daily.addcon
            })




            this.initCharts1()
            this.initCharts2()
            this.initCharts3()
            this.initCharts4()

        }
    }
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .el-tabs--border-card {
        /deep/
        .el-tabs__content {
            display: flex;
            justify-content: center;
            align-content: center;
            /*padding: 33px;*/
        }

    }

    .el-tabs--border-card {
        /deep/
        .el-tabs__item.is-active {
            font-weight: bold;
        }

        /deep/
        .el-tabs__item {
            font-weight: bold;
        }
    }

</style>
