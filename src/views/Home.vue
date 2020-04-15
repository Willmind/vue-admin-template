<template>
    <div class="home-container" style="height:1000px;">
        <el-scrollbar style="height:100%">
            <div>
                <div style="display:inline-block;">
                    <el-tabs style="height: 625px;" v-model="activeTab" type="border-card">
                        <el-tab-pane name="China">
                            <span slot="label"><i class="iconfont icon-zhongguo"></i> {{$t('m.DomesticEpidemicData')}}</span>
                            <div class="main">
                                <div class="home-content">
                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.CumulativeDiagnosis')}}</h4>
                                        </div>
                                        <div class="number" style="color: #a31d13">{{dataDetail.gntotal}}</div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #a31d13">{{add_daily.addcon_new}}</span>
                                        </div>
                                    </div>


                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.DeadNums')}}</h4>
                                        </div>
                                        <div class="number" style="color: #333">{{dataDetail.deathtotal}}</div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #333">{{add_daily.adddeath_new}}</span>
                                        </div>
                                    </div>

                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.CureNums')}}</h4>
                                        </div>
                                        <div class="number" style="color: #34aa70">
                                            {{dataDetail.curetotal}}
                                        </div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #34aa70">{{add_daily.addcure_new}}</span>
                                        </div>
                                    </div>

                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.ExistDiagnosis')}}
                                                <el-popover
                                                    placement="bottom"
                                                    title="疫情数据说明"
                                                    width="200"
                                                    trigger="hover"
                                                    content="1.数据含义:现有确诊数为当前正在治疗中的确诊人数，此数值会随疫情数据的实时更新而发生变化。2.计算方法:
                            现有确诊数=累计确诊数累计死亡数-累计治愈数
                            ">
                                                    <i slot="reference" class="el-icon-question write_explain"></i>
                                                </el-popover>

                                            </h4>

                                        </div>
                                        <div class="number" style="color: #e44a3d">
                                            {{dataDetail.econNum}}
                                        </div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #e44a3d">{{add_daily.addecon_new}}</span>
                                        </div>
                                    </div>

                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item"> {{$t('m.ExistSevereCase')}}</h4>
                                        </div>
                                        <div class="number" style="color: #791618">
                                            {{dataDetail.heconNum}}
                                        </div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #791618">{{add_daily.addhecon_new}}</span>
                                        </div>
                                    </div>

                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.ExistSuspect')}}
                                                <el-popover
                                                    placement="bottom"
                                                    title="疫情数据说明"
                                                    width="200"
                                                    trigger="hover"
                                                    content="疑似病例及较昨日+数据来自国家卫健委每日通报">
                                                    <i slot="reference" class="el-icon-question write_explain"></i>
                                                </el-popover>
                                            </h4>
                                        </div>
                                        <div class="number" style="color: #ffa352">
                                            {{dataDetail.sustotal}}
                                        </div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #ffa352">{{add_daily.wjw_addsus_new}}</span>
                                        </div>
                                    </div>

                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.ImportedCase')}}</h4>
                                        </div>
                                        <div class="number" style="color: #a31d13">{{dataDetail.jwsrNum}}</div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #a31d13">{{add_daily.addjwsr}}</span>
                                        </div>
                                    </div>

                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.AsymptomaticInfection')}}</h4>
                                        </div>
                                        <div class="number" style="color: #a31d13">{{dataDetail.asymptomNum}}</div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #a31d13">+63</span>
                                        </div>
                                    </div>



                                </div>
                                <div class="cover-time">
                                    {{$t('m.By')}}  {{dataDetail.cachetime}}
                                    <span class="cover-explain"> {{$t('m.DataSpecification')}}<i @click="dialogTableVisible1 = true"
                                                                       class="el-icon-question write_explain"></i></span>
                                </div>
                            </div>
                        </el-tab-pane>

                        <el-tab-pane name="world">
                            <span slot="label"><i class="iconfont icon-world"></i> {{$t('m.OverseaEpidemicData')}}</span>
                            <div class="main">
                                <div class="home-content" style="height: 159px">

                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.CumulativeDiagnosis')}}</h4>
                                        </div>
                                        <div class="number" style="color: #a31d13">{{othertotal.certain}}</div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #a31d13">{{othertotal.certain_inc}}</span>
                                        </div>
                                    </div>

                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.DeadNums')}}</h4>
                                        </div>
                                        <div class="number" style="color: #333">{{othertotal.die}}</div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #333">{{othertotal.die_inc}}</span>
                                        </div>
                                    </div>

                                    <div class="single-content">
                                        <div>
                                            <h4 class="text-item">{{$t('m.CureNums')}}</h4>
                                        </div>
                                        <div class="number" style="color: #34aa70">
                                            {{othertotal.recure}}
                                        </div>
                                        <div class="added">
                                            {{$t('m.add')}}
                                            <span style="color: #34aa70">{{othertotal.recure_inc}}</span>
                                        </div>
                                    </div>


                                </div>
                                <div class="cover-time">
                                    {{$t('m.By')}}  {{dataDetail.cachetime}}
                                    <span class="cover-explain">{{$t('m.DataSpecification')}}<i @click="dialogTableVisible2 = true"
                                                                       class="el-icon-question write_explain"></i></span>
                                </div>
                            </div>
                        </el-tab-pane>

                    </el-tabs>
                </div>
                <div class="map">
                    <el-tabs v-model="activeTab2" type="border-card">
                        <el-tab-pane name="China">
                            <span slot="label"><i class="iconfont icon-zhongguo"></i> {{$t('m.DomesticEpidemic')}}</span>
                            <el-tabs>
                                <el-tab-pane >
                                    <span slot="label"> {{$t('m.EpidemicTrend')}}</span>
                                    <div style="height:500px;width: 500px;" id="myCharts1" ref="myCharts1"></div>
                                </el-tab-pane>

                                <el-tab-pane >
                                    <span slot="label"> {{$t('m.NewEpidemicSituation')}}</span>
                                    <div style="height:500px;width: 500px;" id="myCharts3" ref="myCharts3"></div>
                                </el-tab-pane>

                                <el-tab-pane>
                                    <span slot="label"> {{$t('m.CureRateMortalityTrends')}}</span>
                                    <div style="height:500px;width: 500px;" id="myCharts4" ref="myCharts4"></div>
                                </el-tab-pane>

                                <el-tab-pane >
                                    <span slot="label"> {{$t('m.CurrentDiagnosisSuspectedCumulativeDiagnosisTrend')}}</span>
                                    <div style="height:500px;width: 500px;" id="myCharts5" ref="myCharts5"></div>

                                </el-tab-pane>


                                <!--                        <el-tab-pane label="海外疫情新增">-->
                                <!--                            <div style="height:500px;width: 500px;" id="myCharts4" ref="myCharts4"></div>-->
                                <!--                        </el-tab-pane>-->
                            </el-tabs>

                        </el-tab-pane>
                        <el-tab-pane name="world">
                            <span slot="label"><i class="iconfont icon-world"></i> {{$t('m.OverseaEpidemic')}}</span>
                            <el-tabs>
                                <el-tab-pane >
                                    <span slot="label"> {{$t('m.OverseasEpidemicTrend')}}</span>
                                    <div style="height:500px;width: 500px;" id="myCharts2" ref="myCharts2"></div>
                                </el-tab-pane>
                            </el-tabs>

                        </el-tab-pane>
                    </el-tabs>

                </div>


                <el-dialog title="疫情数据说明" :visible.sync="dialogTableVisible1">
                    <div style="padding: 0 30px 30px 20px;letter-spacing:2px;">
                        <p><strong>1.数据来源</strong>:国家卫健委、各省市区卫健。委、各省市区政府、港澳台官方渠道公开数据。</p>
                        <p><strong>2.数据更新时间:</strong>实时更新全国、各省市、区数据，因核实计算需要，与官方的发布时间相比，将有-定时间延迟。</p>
                        <p><strong>3.实时数据统计原则:</strong></p>
                        <p>①每日上午优先将全国各类数据与国家卫健委公布数据对齐(此时各省市区数据尚未及时更新，会出现全国数据大于各省市区合计数的情况)</p>
                        <p>②数据实时更新过程中，各省市区卫健委陆续公布数据，如果各省市区公布数据总和大于之前国家公布数据，则全国数据切换为各省市区合计数(“疑似病例”仅使用国家卫健委每天公布的共有疑似病例总数，而不做新增累计) ;</p>
                        <p>③"较昨日+”的数据以国家卫健委每日公布的新增数据为基线，实时根据各 省市区陆续公布的数据进行更新;</p>
                        <p>④由于各省市区数据发布时间和统计时间各不相同，因此在部分时段可能出现国家总数与各省市区总数</p>
                        <p><strong>4.疫情趋势图:</strong>全国数据使用国家卫健委公布的截至前一日24:00数据，每日更新一次。</p>
                    </div>
                </el-dialog>

                <el-dialog title="疫情数据说明" :visible.sync="dialogTableVisible2">
                    <div style="padding: 0 30px 30px 20px;letter-spacing:2px;">
                        <p><strong>1.数据来源:</strong>海外疫情数据均来自各国家和地区官方通报及媒体公开报道。</p>
                        <p><strong>2.数据更新时间:</strong>数据实时更新，因计算、核实需要，与官方发布时间相比，将存在一定延迟。</p>
                        <p><strong>3.说明:</strong></p>
                        <p>因”钻石公主号"邮轮内人员来自世界多国，故在邮轮上确诊的病例数据计入日本，离开邮轮后确诊的病例数据则分别计入其所在国。若出现其他特殊情况，将以各国家和地区官方通报的统计口径为准。</p>

                    </div>
                </el-dialog>

                <div>

                </div>

            </div>

        </el-scrollbar>


    </div>
</template>

<script>
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: 'home',
        computed: {
            ...mapState(
                {
                    userData: 'userData'
                }
            )
        },

        data() {
            return {

                cn_econNum: [],
                cn_susNum: [],

                cn_deathRate: [],
                cn_cureRate: [],

                chinaDayList: [],
                chinaDateList: [],
                cn_addConList: [],
                cn_addDeadList: [],
                cn_addHealList: [],
                cn_addSusList: [],

                tabPosition: 'left',
                activeTab: 'China',
                activeTab2: 'China',

                dialogTableVisible1: false,
                dialogTableVisible2: false,
                historylist: '',
                adminPermission: '',
                othertotal: '',
                dataDetail: '',
                add_daily: '',

                otherhistorylist: '',
                certain: [],
                recure: [],
                die: [],
                date: [],


                cn_conNumList: [],
                cn_cureNum: [],
                dateList: [],
                cn_deathNum: [],
            }
        },

        methods: {
            initMyCharts1()     {
                const myCharts1 = this.$echarts.init(this.$refs.myCharts1);
                let option = {
                    title: {
                        text: '全国疫情趋势图',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {},
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
                    legend: {
                        data: ['累计确诊', '累计治愈', '累计死亡'],
                        x: '150px',
                        y: '5px',
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView: { //数据视图
                                show: true,
                            },
                            restore: { //重置
                                show: true
                            },
                        },

                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.dateList
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {

                            showSymbol: true,
                            symbolSize: 8,
                            name: '累计确诊',
                            type: 'line',
                            data: this.cn_conNumList,
                            itemStyle: {
                                normal: {
                                    color: 'rgb(232,49,50)', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: 'rgb(232,49,50)' //改变折线颜色
                                    }
                                }
                            }


                        },
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '累计治愈',
                            type: 'line',
                            data: this.cn_cureNum,
                            itemStyle: {
                                normal: {
                                    color: '#34aa70', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: '#34aa70' //改变折线颜色
                                    }
                                }
                            }
                        },
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '累计死亡',
                            type: 'line',
                            data: this.cn_deathNum,
                            itemStyle: {
                                normal: {
                                    color: '#333', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: '#333' //改变折线颜色
                                    }
                                }
                            }
                        },


                    ]
                };
                myCharts1.setOption(option);

            },
            initMyCharts2() {
                const myCharts2 = this.$echarts.init(this.$refs.myCharts2);
                let option = {
                    title: {
                        text: '海外疫情趋势图',
                        subtext: '数据来自interface.sina.cn',

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
                    legend: {
                        data: ['累计确诊', '累计治愈', '累计死亡'],
                        x: '150px',
                        y: '5px',
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
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
                        boundaryGap: false,
                        data: this.date
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '累计确诊',
                            type: 'line',
                            data: this.certain,
                            itemStyle: {
                                normal: {
                                    color: 'rgb(232,49,50)', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: 'rgb(232,49,50)' //改变折线颜色
                                    }
                                }
                            }


                        },
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '累计治愈',
                            type: 'line',
                            data: this.recure,
                            itemStyle: {
                                normal: {
                                    color: '#34aa70', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: '#34aa70' //改变折线颜色
                                    }
                                }
                            }
                        },
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '累计死亡',
                            type: 'line',
                            data: this.die,
                            itemStyle: {
                                normal: {
                                    color: '#333', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: '#333' //改变折线颜色
                                    }
                                }
                            }
                        },


                    ]
                };
                myCharts2.setOption(option);

            },
            initMyCharts3() {
                const myCharts3 = this.$echarts.init(this.$refs.myCharts3);
                let option = {
                    title: {
                        text: '全国疫情新增图',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {},
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


                    legend: {
                        data: ['新增确诊', '新增治愈', '新增死亡'],
                        x: '150px',
                        y: '5px',
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView: { //数据视图
                                show: true,
                            },
                            restore: { //重置
                                show: true
                            },
                        },

                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.chinaDateList
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '新增确诊',
                            type: 'line',
                            data: this.cn_addConList,
                            itemStyle: {
                                normal: {
                                    color: 'rgb(232,49,50)', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: 'rgb(232,49,50)' //改变折线颜色
                                    }
                                }
                            },


                        },
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '新增治愈',
                            type: 'line',
                            data: this.cn_addHealList,
                            itemStyle: {
                                normal: {
                                    color: '#34aa70', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: '#34aa70' //改变折线颜色
                                    }
                                }
                            }
                        },
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '新增死亡',
                            type: 'line',
                            data: this.cn_addDeadList,
                            itemStyle: {
                                normal: {
                                    color: '#333', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: '#333' //改变折线颜色
                                    }
                                }
                            }
                        },


                    ]
                };
                myCharts3.setOption(option);

            },
            initMyCharts4() {
                const myCharts4 = this.$echarts.init(this.$refs.myCharts4);
                let option = {
                    title: {
                        text: '全国治愈率/死亡率趋势',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {},
                    tooltip: {
                        formatter: function (params) {
                            var relVal = params[0].name;
                            for (var i = 0, l = params.length; i < l; i++) {
                                relVal += '<br/>' + params[i].marker + params[i].seriesName + ':' + params[i].value + "%";
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
                    legend: {
                        data: ['治愈率', '死亡率'],
                        x: '200px',
                        y: '5px',
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView: { //数据视图
                                show: true,
                            },
                            restore: { //重置
                                show: true
                            },
                        },

                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.dateList
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '治愈率',
                            type: 'line',
                            data: this.cn_cureRate,
                            itemStyle: {
                                normal: {
                                    color: '#34aa70', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: '#34aa70' //改变折线颜色
                                    }
                                }
                            }
                        },
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '死亡率',
                            type: 'line',
                            data: this.cn_deathRate,
                            itemStyle: {
                                normal: {
                                    color: '#333', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: '#333' //改变折线颜色
                                    }
                                }
                            }
                        },
                    ]
                };
                myCharts4.setOption(option);
            },
            initMyCharts5() {
                const myCharts5 = this.$echarts.init(this.$refs.myCharts5);
                let option = {
                    title: {
                        text: '全国现有确诊/疑似趋势',
                        subtext: '数据来自interface.sina.cn',
                    },
                    toolbox: {},
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
                    legend: [
                        {
                            data: ['现有确诊', '现有疑似'],
                            x: '200px',
                            y: '5px',
                        },
                        {
                            data: ['累计确诊'],
                            x: '200px',
                            y: '25px',

                        }
                    ],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView: { //数据视图
                                show: true,
                            },
                            restore: { //重置
                                show: true
                            },
                        },

                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.dateList
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '现有确诊',
                            type: 'line',
                            data: this.cn_econNum,
                            itemStyle: {
                                normal: {
                                    color: 'rgb(254,150,136)', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: 'rgb(254,150,136)' //改变折线颜色
                                    }
                                }
                            }
                        },
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '累计确诊',
                            type: 'line',
                            data: this.cn_conNumList,
                            itemStyle: {
                                normal: {
                                    color: 'rgb(232,49,50)', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: 'rgb(232,49,50)' //改变折线颜色
                                    }
                                }
                            }
                        },
                        {
                            symbolSize: 8,
                            showSymbol: true,
                            name: '现有疑似',
                            type: 'line',
                            data: this.cn_susNum,
                            itemStyle: {
                                normal: {
                                    color: 'rgb(236,146,23)', //改变折线点的颜色
                                    lineStyle: {
                                        width:5,//折线宽度
                                        color: 'rgb(236,146,23)' //改变折线颜色
                                    }
                                }
                            }
                        },
                    ]
                };
                myCharts5.setOption(option);
            },


        },

        mounted() {
            console.log(123);
            let url = "https://interface.sina.cn/news/wap/fymap2020_data.d.json";



            axios.get('getListTotal').then((res) => {

                this.$store.commit('updateDayList', res.data)
                this.chinaDayList = res.data.chinaDayList
                console.log(this.chinaDayList);
                for (var i = 0; i < this.chinaDayList.length; i++) {
                    this.chinaDateList.push(this.chinaDayList[i].date.slice(5, 10))
                    this.cn_addConList.push(this.chinaDayList[i].today.confirm)
                    this.cn_addDeadList.push(this.chinaDayList[i].today.dead)
                    this.cn_addHealList.push(this.chinaDayList[i].today.heal)
                    this.cn_addSusList.push(this.chinaDayList[i].today.suspect)
                }
                this.initMyCharts3()
            })

            this.$jsonp(url).then(res => {
                let epidemicData = res.data
                this.$store.commit('updateEpidemicData', epidemicData)

                this.add_daily = res.data.add_daily;
                this.othertotal = res.data.othertotal;
                this.historylist = res.data.historylist;
                this.dataDetail = res.data;
                console.log(this.dataDetail);
                this.otherhistorylist = res.data.otherhistorylist

                for (var i = 0; i < this.historylist.length; i++) {
                    this.cn_conNumList.push(parseInt(this.historylist[i].cn_conNum));
                    this.dateList.push(this.historylist[i].date.replace('.', '-'))
                    this.cn_cureNum.push(parseInt(this.historylist[i].cn_cureNum))
                    this.cn_deathNum.push(parseInt(this.historylist[i].cn_deathNum))
                    this.cn_deathRate.push(parseFloat(this.historylist[i].cn_deathRate))
                    this.cn_cureRate.push(parseFloat(this.historylist[i].cn_cureRate))
                    this.cn_econNum.push(parseInt(this.historylist[i].cn_econNum))
                    this.cn_susNum.push(parseInt(this.historylist[i].cn_susNum))
                }
                this.cn_susNum.reverse();
                this.cn_econNum.reverse();
                console.log(this.cn_susNum);

                this.cn_cureNum.reverse();
                this.cn_deathNum.reverse();
                this.cn_conNumList.reverse();
                this.dateList.reverse()
                this.cn_deathRate.reverse()
                this.cn_cureRate.reverse()


                for (var i = 0; i < this.otherhistorylist.length; i++) {
                    this.certain.push(parseInt(this.otherhistorylist[i].certain));
                    this.date.push(this.otherhistorylist[i].date.replace('.', '-'))
                    this.recure.push(parseInt(this.otherhistorylist[i].recure))
                    this.die.push(parseInt(this.otherhistorylist[i].die))
                }

                this.certain.reverse();
                this.date.reverse();
                this.recure.reverse();
                this.die.reverse()


                this.initMyCharts1()
                this.initMyCharts2()
                this.initMyCharts4()
                this.initMyCharts5()


            });


            if (this.userData['adminPermission'] == '0') {
                this.adminPermission = false
            } else {
                this.adminPermission = true
            }


        }
    }
</script>

<style lang="scss" scoped>
    .map {
        display: inline-block;
        margin: 0 10px 0 0;
        padding: 0 10px 0 0;
        height: 700px;
        width: 552px;

        float: left
    }

    .home-container {
        display: flex;
        justify-content: center;

        padding: 10px;
        margin: 0 0 0 13px;
    }

    .main {
        border-radius: 16px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, .1);
        background-color: white;
    }

    .home-content {

        display: flex;
        width: 512px;
        height: 422px;
        margin: 10px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;


    }

    .single-content {
        text-align-last: center;

        width: 150px;
        height: 130px;
        /*background-color: #00B7FF;*/
        padding: 10px 10px 0 10px;
        margin: 10px 10px 0 10px;

    }

    .text-item {
        font-weight: bold;
        font-size: 20px;
    }

    .number {
        font-weight: bolder;
        font-size: 35px;
        display: block;
    }

    .added {
        font-weight: bolder;
        font-size: 17px;
        color: #999999;
    }

    .write_explain {
        cursor: pointer;
    }

    .cover-time {
        clear: both;
        padding: 0 0 10px;
        margin: 0 32px;
        font-size: 18px;
        color: #a9a9a9;
        font-weight: 400;
        border-bottom: 1px solid #e8e8e8;
    }

    .cover-explain {
        float: right;
        padding-left: 30px;
        width: auto;
        height: 40px;
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
