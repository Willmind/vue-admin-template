<template>
    <div style="height: 800px;">

            <div style="display: flex;justify-content: center;align-items: center">
                <div style="width:800px;height:700px;padding: 10px;">
                    <el-tabs type="border-card">
                        <el-tab-pane label="全国疫情地图">
                            <div style="width:600px;height:450px; " id="myCharts1" ref="myCharts1"></div>
                        </el-tab-pane>

                        <el-tab-pane  label="海外疫情地图" >
                            <div style="width:563px;height:450px; " id="myCharts2" ref="myCharts2"></div>
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
                otherlistObject: [],
                conObject: {},
                areaDataList: [],
                areaDataList2: [],

            }

        },
        methods: {
            initCharts2() {
                const myCharts2 = this.$echarts.init(this.$refs.myCharts2);
                let dataList = this.areaDataList
                let option = {
                    title: {
                        text: '全球疫情地图',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {
                                show:true,
                                excludeComponents :['toolbox'],
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
                        formatter: function (params, ticket, callback) {
                            return params.seriesName + '<br />' + params.name + '：' + params.value
                        }//数据格式化
                    },
                    visualMap: {
                        // calculable:true,
                        min: 0,
                        max: 10000,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],//取值范围的文字
                        inRange: {
                            color: ['#ffffff', '#a31d13']//取值范围的颜色
                        },
                        show: true//图注
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

            initCharts1() {
                const myCharts1 = this.$echarts.init(this.$refs.myCharts1);
                let dataList = [
                    {name: "南海诸岛", value: 0},
                    {name: '北京', value: this.conObject['北京']},
                    {name: '天津', value: this.conObject['天津']},
                    {name: '上海', value: this.conObject['上海']},
                    {name: '重庆', value: this.conObject['重庆']},
                    {name: '河北', value: this.conObject['河北']},
                    {name: '河南', value: this.conObject['河南']},
                    {name: '云南', value: this.conObject['云南']},
                    {name: '辽宁', value: this.conObject['辽宁']},
                    {name: '黑龙江', value: this.conObject['黑龙江']},
                    {name: '湖南', value: this.conObject['湖南']},
                    {name: '安徽', value: this.conObject['安徽']},
                    {name: '山东', value: this.conObject['山东']},
                    {name: '新疆', value: this.conObject['新疆']},
                    {name: '江苏', value: this.conObject['江苏']},
                    {name: '浙江', value: this.conObject['浙江']},
                    {name: '江西', value: this.conObject['江西']},
                    {name: '湖北', value: this.conObject['湖北']},
                    {name: '广西', value: this.conObject['广西']},
                    {name: '甘肃', value: this.conObject['甘肃']},
                    {name: '山西', value: this.conObject['山西']},
                    {name: '内蒙古', value: this.conObject['内蒙古']},
                    {name: '陕西', value: this.conObject['陕西']},
                    {name: '吉林', value: this.conObject['吉林']},
                    {name: '福建', value: this.conObject['福建']},
                    {name: '贵州', value: this.conObject['贵州']},
                    {name: '广东', value: this.conObject['广东']},
                    {name: '青海', value: this.conObject['青海']},
                    {name: '西藏', value: this.conObject['西藏']},
                    {name: '四川', value: this.conObject['四川']},
                    {name: '宁夏', value: this.conObject['宁夏']},
                    {name: '海南', value: this.conObject['海南']},
                    {name: '台湾', value: this.conObject['台湾']},
                    {name: '香港', value: this.conObject['香港']},
                    {name: '澳门', value: this.conObject['澳门']}
                ]
                let option = {
                    title: {
                        text: '全国疫情地图',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {
                        showTitle:true,
                        show: true,
                        feature: {

                            saveAsImage: {
                                show:true,
                                excludeComponents :['toolbox'],
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
                        formatter: function (params, ticket, callback) {
                            return params.seriesName + '<br />' + params.name + '：' + params.value
                        }//数据格式化
                    },
                    visualMap: {
                        min: 0,
                        max: 2500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],//取值范围的文字
                        inRange: {
                            color: ['#ffffff', '#a31d13']//取值范围的颜色
                        },
                        show: true//图注
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

            }

        },
        mounted() {
            console.log(this.epidemicData.gntotal);
            let mapData = require('./../assets/json/mapData')
            const invertKeyValues = obj =>
                Object.keys(obj).reduce((acc, key) => {
                    acc[obj[key]] = key;
                    return acc;
                }, {});
            let mapCurrent = invertKeyValues(mapData)
            console.log(mapCurrent);


            for (var i = 0; i < this.epidemicData.list.length; i++) {
                let key = this.epidemicData.list[i].name
                let value = this.epidemicData.list[i].value
                this.conObject[key] = value
            }
            for (var i = 0; i < this.epidemicData.otherlist.length; i++) {
                this.otherlistObject.push({name: this.epidemicData.otherlist[i].name, value: this.epidemicData.otherlist[i].conNum})
            }

            for (var i = 0; i < this.otherlistObject.length; i++) {
                this.areaDataList.push({
                    name: mapCurrent[this.otherlistObject[i].name],
                    value:this.otherlistObject[i].value
                })

            }
            this.areaDataList.push({
                name: 'China',
                value:this.epidemicData.gntotal
            })

            console.log(this.otherlistObject);


            this.initCharts1()
            this.initCharts2()

        }
    }
</script>

<style lang="scss" scoped>
    .el-tabs--border-card {
        /deep/
        .el-tabs__content {
            display: flex;
            justify-content: center;
            align-content: center;
            padding: 33px;
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
