<template>
    <div class="home-container">
        <div style="display:inline-block;">
            <el-tabs style="height: 600px;width: 585px;" v-model="activeTab" type="border-card">
                <el-tab-pane name="China">
                    <span slot="label"><i class="iconfont icon-zhongguo"></i> 全国疫情数据（含港澳台）</span>
                    <div class="main">
                        <div class="home-content">

                            <div class="single-content">
                                <div>
                                    <h4 class="text-item">累计确诊</h4>
                                </div>
                                <div class="number" style="color: #a31d13">{{dataDetail.gntotal}}</div>
                                <div class="added">
                                    较昨日
                                    <span style="color: #a31d13">{{add_daily.addcon_new}}</span>
                                </div>
                            </div>

                            <div class="single-content">
                                <div>
                                    <h4 class="text-item">累计死亡</h4>
                                </div>
                                <div class="number" style="color: #333">{{dataDetail.deathtotal}}</div>
                                <div class="added">
                                    较昨日
                                    <span style="color: #333">{{add_daily.adddeath_new}}</span>
                                </div>
                            </div>

                            <div class="single-content">
                                <div>
                                    <h4 class="text-item">累计治愈</h4>
                                </div>
                                <div class="number" style="color: #34aa70">
                                    {{dataDetail.curetotal}}
                                </div>
                                <div class="added">
                                    较昨日
                                    <span style="color: #34aa70">{{add_daily.addcure_new}}</span>
                                </div>
                            </div>

                            <div class="single-content">
                                <div>
                                    <h4 class="text-item">现有确诊
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
                                    较昨日
                                    <span style="color: #e44a3d">{{add_daily.addecon_new}}</span>
                                </div>
                            </div>

                            <div class="single-content">
                                <div>
                                    <h4 class="text-item">现有重症</h4>
                                </div>
                                <div class="number" style="color: #791618">
                                    {{dataDetail.heconNum}}
                                </div>
                                <div class="added">
                                    较昨日
                                    <span style="color: #791618">{{add_daily.addhecon_new}}</span>
                                </div>
                            </div>

                            <div class="single-content">
                                <div>
                                    <h4 class="text-item">现有疑似
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
                                    较昨日
                                    <span style="color: #ffa352">{{add_daily.wjw_addsus_new}}</span>
                                </div>
                            </div>


                        </div>
                        <div class="cover-time">
                            {{dataDetail.times}}
                            <span class="cover-explain">数据说明<i @click="dialogTableVisible1 = true"
                                                               class="el-icon-question write_explain"></i></span>
                        </div>
                    </div>
                </el-tab-pane>

                <el-tab-pane name="world">
                    <span slot="label"><i class="iconfont icon-world"></i> 海外疫情</span>
                    <div class="main">
                        <div class="home-content" style="height: 159px">

                            <div class="single-content">
                                <div>
                                    <h4 class="text-item">累计确诊</h4>
                                </div>
                                <div class="number" style="color: #a31d13">{{othertotal.certain}}</div>
                                <div class="added">
                                    较昨日
                                    <span style="color: #a31d13">{{othertotal.certain_inc}}</span>
                                </div>
                            </div>

                            <div class="single-content">
                                <div>
                                    <h4 class="text-item">累计死亡</h4>
                                </div>
                                <div class="number" style="color: #333">{{othertotal.die}}</div>
                                <div class="added">
                                    较昨日
                                    <span style="color: #333">{{othertotal.die_inc}}</span>
                                </div>
                            </div>

                            <div class="single-content">
                                <div>
                                    <h4 class="text-item">累计治愈</h4>
                                </div>
                                <div class="number" style="color: #34aa70">
                                    {{othertotal.recure}}
                                </div>
                                <div class="added">
                                    较昨日
                                    <span style="color: #34aa70">{{othertotal.recure_inc}}</span>
                                </div>
                            </div>


                        </div>
                        <div class="cover-time">
                            {{dataDetail.times}}
                            <span class="cover-explain">数据说明<i @click="dialogTableVisible2 = true"
                                                               class="el-icon-question write_explain"></i></span>
                        </div>
                    </div>
                </el-tab-pane>

            </el-tabs>
        </div>
        <div class="map">
            111
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
                activeTab: 'China',
                dialogTableVisible1: false,
                dialogTableVisible2: false,
                historylist:'',
                adminPermission: '',
                othertotal: '',
                dataDetail: '',
                add_daily: '',

                cn_conNumList:[],
                dateList:[],
            }
        },

        methods: {


            getDataList() {
                let url = "https://interface.sina.cn/news/wap/fymap2020_data.d.json";
                this.$jsonp(url).then(res => {
                    this.add_daily = res.data.add_daily;
                    this.othertotal = res.data.othertotal;
                    this.historylist=res.data.historylist;
                    console.log(this.historylist);

                    this.dataDetail = res.data;
                    for(var i=0;i<this.historylist.length;i++){
                        this.cn_conNumList.push(this.historylist[i].cn_conNum)
                        this.dateList.push(this.historylist[i].date)
                    };
                    this.cn_conNumList.reverse();
                    this.dateList.reverse()
                    console.log(this.dateList);

                });
            },
        },

        mounted() {
            this.getDataList()


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
        margin: 0 20px 0 0;
        padding: 0 20px 0 0;
        height: 600px;
        width: 585px;

        float: left
    }

    .home-container {

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
        height: 289px;
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
