<template>
    <div class="_wrap">


        <div style="display:flex;justify-content: center">

                <el-card class="box-card">
                    <div class="wrap">
                        <div class="chart">
                        <span class="line-chart">
                            <svg class="icon closeImg"  aria-hidden="true">
                                <use xlink:href="#icon-zhongguo1"></use>
                            </svg>

                           {{$t('m.ChinaCase')}}
                        </span>
                            <span> {{$t('m.clicktodetail')}}</span>

                        </div>
                        <div class="province_th">
                            <span class="item_name" style="font-weight: bold">{{$t('m.area')}}</span>
                            <span class="item_name" style="color: rgb(228,74,61);font-weight: bold ">{{$t('m.added')}}</span>
                            <span class="item_name" style="font-weight: bold">{{$t('m.cum')}}</span>
                            <span class="item_name" style="font-weight: bold">{{$t('m.dead')}}</span>
                            <span class="item_name" style="font-weight: bold">{{$t('m.cure')}}</span>
                        </div>
                        <ul style="margin: 60px 0">
                            <li>
                                <div class="hasCities" v-for="(item, index) in dataList" :key="index">

                                <span class="item_name" @click="changeActive(item)" @mouseover="changeColor(item)"
                                      @mouseleave="changeColor(!item)"
                                      :class="{to_active:shows==item.name}"
                                      style="font-weight: bold;color:#2E6EB1 ;cursor: pointer;text-decoration:underline">{{item.name}}</span>
                                    <span class="item_name" style="color: rgb(228,74,61)">{{item.conadd}}</span>
                                    <span class="item_name">{{item.value}}</span>
                                    <span class="item_name">{{item.deathNum}}</span>
                                    <span class="item_name">{{item.cureNum}}</span>

                                </div>
                            </li>
                        </ul>
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div class="wrap">
                        <div class="chart">
                        <span class="line-chart">
                            <svg class="icon closeImg"  aria-hidden="true">
                                <use xlink:href="#icon-shijie1"></use>
                            </svg>
                            {{$t('m.OverseasCase')}}
                        </span>
                            <span>{{$t('m.publish')}}</span>
                        </div>

                        <div class="province_th">
                            <span class="item_name" style="font-weight: bold">{{$t('m.area')}}</span>
                            <span class="item_name" style="color: rgb(228,74,61);font-weight: bold ">{{$t('m.added')}}</span>
                            <span class="item_name" style="font-weight: bold">{{$t('m.cum')}}</span>
                            <span class="item_name" style="font-weight: bold">{{$t('m.dead')}}</span>
                            <span class="item_name" style="font-weight: bold">{{$t('m.cure')}}</span>
                        </div>
                        <ul style="margin: 60px 0">
                            <li>
                                <div class="hasCities" v-for="(item, index) in otherlist" :key="index">

                                <span class="item_name"
                                      style="font-weight: bold">{{item.name}}</span>
                                    <span class="item_name" style="color: rgb(228,74,61)">{{item.conadd}}</span>
                                    <span class="item_name">{{item.value}}</span>
                                    <span class="item_name">{{item.deathNum}}</span>
                                    <span class="item_name">{{item.cureNum}}</span>

                                </div>
                            </li>
                        </ul>
                    </div>

                </el-card>

        </div>

        <el-dialog title="疫情趋势"  :visible.sync="dialogFormVisible">
            <el-tabs type="border-card">
                <el-tab-pane label="累计确诊/累计治愈" style="display: flex;justify-content: center">
                    <div style="height:500px;width: 1050px;" id="myCharts" ref="myCharts"></div>
                </el-tab-pane>
                <el-tab-pane label="新增确诊/死亡">
                    <div style="height:500px;width: 1050px;" id="myCharts2" ref="myCharts2"></div>
                </el-tab-pane>
                <el-tab-pane label="现有确诊/零增长天数">
                    <div style="height:500px;width: 1050px;" id="myCharts3" ref="myCharts3"></div>
                </el-tab-pane>

            </el-tabs>
        </el-dialog>

    </div>


</template>


<script>
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: "regionCase",
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
                singleDataList: [],

                dialogFormVisible: false,
                shows: '',
                active: '',

                dataList: [],
                otherlist: [],


            }
        },
        methods: {
            initMyCharts(data,name) {
                console.log(data);
                let nameList = [];
                let conNumList = [];
                // let conaddList = [];
                let cureNumList = [];
                // let deathNumList = [];
                // let econNumList = [];
                // let zerodaysList = [];

                for (var i = 0; i < data.length; i++) {
                    nameList.push(data[i].name)
                    conNumList.push(data[i].conNum)
                    cureNumList.push(data[i].cureNum)
                    // conaddList.push(data[i].conadd)
                    // deathNumList.push(data[i].deathNum)
                    // econNumList.push(data[i].econNum)
                    // zerodaysList.push(data[i].zerodays)
                }

                console.log(name);
                const myCharts = this.$echarts.init(this.$refs.myCharts);
                let option = {
                    title: {
                        text: name+'疫情趋势图',
                        subtext: '数据来自interface.sina.cn',
                        left:20
                    },
                    toolbox: {
                        right:40,
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
                    xAxis: {
                        type: 'category',
                        data: nameList,
                        "axisLabel":{
                            interval: 0
                        },

                    },
                    yAxis: {
                        type: 'value'
                    },
                    legend: {
                        data: ['累计确诊', '累计治愈'],
                        left: 170,
                        y: '5px',
                    },
                    tooltip: {
                        formatter: function (params) {
                            var relVal = params[0].name;
                            for (var i = 0, l = params.length; i < l; i++) {
                                relVal += '<br/>' + params[i].marker + params[i].seriesName + ':' + params[i].value + "人";
                            }
                            return relVal;
                        },
                        trigger: 'axis',

                        backgroundColor: '#ffffff',
                        extraCssText: 'box-shadow: 0 2px 20px rgba(0, 0, 0, .1);',
                        textStyle: {
                            color: '#000000',
                        },
                    },

                    dataZoom:{
                        realtime:true, //拖动滚动条时是否动态的更新图表数据
                        height:25,//滚动条高度
                        start:0,//滚动条开始位置（共100等份）
                        end:80//结束位置（共100等份）
                    },

                    series: [
                        {
                            name:'累计确诊',
                            data: conNumList,
                            type: 'bar',
                            itemStyle: {    // 图形的形状
                                color: 'rgb(228,74,61)',
                            },
                        },
                        {
                            name:'累计治愈',
                            data: cureNumList,
                            type: 'bar',
                            itemStyle: {    // 图形的形状
                                color: '#34aa70',
                            },
                        }


                    ]
                };
                myCharts.setOption(option);
            },
            initMyCharts2(data,name) {
                console.log(data);
                let nameList = [];
                let conaddList = [];
                let deathNumList = [];


                for (var i = 0; i < data.length; i++) {
                    nameList.push(data[i].name)
                    // conNumList.push(data[i].conNum)
                    // cureNumList.push(data[i].cureNum)
                    conaddList.push(data[i].conadd)
                    deathNumList.push(data[i].deathNum)
                    // econNumList.push(data[i].econNum)
                    // zerodaysList.push(data[i].zerodays)
                }

                console.log(name);
                const myCharts2 = this.$echarts.init(this.$refs.myCharts2);
                let option = {
                    title: {
                        text: name+'疫情趋势图',
                        subtext: '数据来自interface.sina.cn',
                        left:20
                    },
                    toolbox: {
                        right:40,
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
                    xAxis: {
                        type: 'category',
                        data: nameList,
                        "axisLabel":{
                            interval: 0
                        },

                    },
                    yAxis: {
                        type: 'value'
                    },
                    legend: {
                        data: ['新增确诊', '死亡'],
                        left: 170,
                        y: '5px',
                    },
                    tooltip: {
                        formatter: function (params) {
                            var relVal = params[0].name;
                            for (var i = 0, l = params.length; i < l; i++) {
                                relVal += '<br/>' + params[i].marker + params[i].seriesName + ':' + params[i].value + "人";
                            }
                            return relVal;
                        },
                        trigger: 'axis',

                        backgroundColor: '#ffffff',
                        extraCssText: 'box-shadow: 0 2px 20px rgba(0, 0, 0, .1);',
                        textStyle: {
                            color: '#000000',
                        },
                    },
                    dataZoom:{
                        realtime:true, //拖动滚动条时是否动态的更新图表数据
                        height:25,//滚动条高度
                        start:0,//滚动条开始位置（共100等份）
                        end:80//结束位置（共100等份）
                    },

                    series: [
                        {
                            name:'新增确诊',
                            data: conaddList,
                            type: 'bar',
                            itemStyle: {    // 图形的形状
                                color: 'rgb(228,74,61)',
                            },
                        },
                        {
                            name:'死亡',
                            data: deathNumList,
                            type: 'bar',
                            itemStyle: {    // 图形的形状
                                color: 'rgb(130,130,130)',
                            },
                        }


                    ]
                };
                myCharts2.setOption(option);
            },
            initMyCharts3(data,name) {
                console.log(data);
                let nameList = [];
                let econNumList = [];
                let zerodaysList = [];


                for (var i = 0; i < data.length; i++) {
                    nameList.push(data[i].name)
                    econNumList.push(data[i].econNum)
                    zerodaysList.push(data[i].zerodays)
                }

                console.log(name);
                const myCharts3 = this.$echarts.init(this.$refs.myCharts3);
                let option = {
                    title: {
                        text: name+'疫情趋势图',
                        subtext: '数据来自interface.sina.cn',
                        left:20
                    },
                    toolbox: {
                        right:40,
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
                    xAxis: {
                        type: 'category',

                        data: nameList,
                        "axisLabel":{
                            interval: 0
                        },

                    },
                    yAxis: {
                        type: 'value'
                    },
                    legend: {
                        data: ['现有确诊', '零增长天数'],
                        left: 170,
                        y: '5px',
                    },
                    tooltip: {
                        formatter: function (params) {
                            // var relVal = params[0].name;
                            // for (var i = 0, l = params.length; i < l; i++) {
                            //     relVal += '<br/>' + params[i].marker + params[i].seriesName + ':' + params[i].value + "人";
                            // }
                            // return relVal;
                            return params[0].name+"<br>"+params[0].marker+params[0].seriesName+":"+params[0].data+"人"+"<br>"+params[1].marker+
                                params[1].seriesName+":"+params[1].data+"天";
                        },
                        trigger: 'axis',

                        backgroundColor: '#ffffff',
                        extraCssText: 'box-shadow: 0 2px 20px rgba(0, 0, 0, .1);',
                        textStyle: {
                            color: '#000000',
                        },
                    },
                    dataZoom:{
                        realtime:true, //拖动滚动条时是否动态的更新图表数据
                        height:25,//滚动条高度
                        start:0,//滚动条开始位置（共100等份）
                        end:80//结束位置（共100等份）
                    },

                    series: [
                        {
                            name:'现有确诊',
                            data: econNumList,
                            type: 'bar',
                            itemStyle: {    // 图形的形状
                                color: 'rgb(228,74,61)',
                            },
                        },
                        {
                            name:'零增长天数',
                            data: zerodaysList,
                            type: 'bar',
                            itemStyle: {    // 图形的形状
                                color: '#34aa70',
                            },
                        }


                    ]
                };
                myCharts3.setOption(option);
            },

            changeActive(data) {
                console.log(data);
                this.dialogFormVisible = true;
                this.$nextTick(() => {
                    let name=data.name
                    this.initMyCharts(data.city,name)
                    this.initMyCharts2(data.city,name)
                    this.initMyCharts3(data.city,name)
                })

            },



            changeColor(data) {
                console.log(data);
                this.shows = data.name;
            },


        },
        mounted() {
            this.dataList = this.epidemicData.list;
            this.otherlist = this.epidemicData.otherlist;
            function sortRule(a, b) {
                return b.value - a.value;
            }
            this.dataList.sort(sortRule)
            this.otherlist.sort(sortRule)
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
        .el-tabs__item.is-active {
            font-weight: bold;
        }

        /deep/
        .el-tabs__item {
            font-weight: bold;
        }
    }



    .to_active {
        color: rgb(64, 158, 255) !important;
    }

    ._wrap {
        height: 90vh; /*height可以根据你要创建的页面进行修改*/
        /*overflow-x: hidden;*/
        /*overflow-y: scroll;*/
        /deep/
        .el-dialog{
            margin-top: 8vh!important;
            width: 1100px;
            height: 680px;
            /deep/
            .el-dialog__body {
                padding: 30px 30px 0px 30px;
            }
        }
        /deep/
        .box-card{
            margin: 40px 20px 0 20px;
            height:auto !important;
            overflow: hidden
        }
    }

    .chart {
        height: 100px;
    }

    .line-chart {
        line-height: 100px;
        font-size: 38px;
        font-weight: bold;

    }

    .wrap {

        width: 540px;
        overflow: hidden;
        padding: 0 20px;
        float: left;

    }

    .province_th {
        /*margin-top: 10px;*/
        width: 500px;
        height: 60px;
        padding: 0 0 0 20px;
        overflow: hidden;
        background: #eee;
        border: 1px solid #eee;
        font-size: 20px;
        position: fixed;
    }

    .hasCities {
        height: 60px;
        padding: 0 0 0 20px;
        overflow: hidden;
        background: rgb(255, 255, 255);
        font-size: 20px;
        border-bottom: 1px solid #e9e9e9;
        border-left: 1px solid #e9e9e9;
        border-right: 1px solid #e9e9e9;
    }

    .item_name {
        float: left;
        width: 90px;
        height: 60px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        line-height: 60px;
    }


</style>
