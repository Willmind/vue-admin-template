<template>
    <div class="home-container">

        <div style="display: flex;">
<!--            <div>-->
<!--                <h5>-->
<!--                    全国疫情数据（含港澳台）-->

<!--                </h5>-->
<!--            </div>-->

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
                    <div class="number" style="color: #333" >{{dataDetail.deathtotal}}</div>
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
                        <h4 class="text-item" >现有确诊<i class="el-icon-question write_explain">

                            <div class="explain_content">
                                <p>1、使用单位须提前3个工作日预约，并加盖单位公章，否则预约无效。</p>
                                <p>2、“项目负责人”必须是预约单位的老师。</p>
                                <p>3、“设备、使用设施要求”栏填写非固定安装的设备、设施，如话筒、投影机等设备。</p>
                                <p>4、图书馆学术报告厅服务项目的预约登记手续，电话：8312244。</p>
                                <p>5、学生进入学术报告厅必须至少有一位负责老师或辅导员到现场，维持秩序。</p>
                                <p>6、报告厅有254个座位。</p>
                                <p>7、活动结束后，使用单位组织人员清走横幅等。</p>
                            </div>


                        </i></h4>

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
                        <h4 class="text-item">现有疑似<i class="el-icon-question"></i></h4>
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
        </div>


    </div>
</template>

<script>
    import axios from 'axios'
    import {mapState } from 'vuex'

    export default {
        name: 'home',
        computed:{
            ...mapState(
                {
                    userData: 'userData'
                }
            )
        },
        data() {
            return {

                adminPermission:'',
                dataDetail:'',
                add_daily:'',
            }
        },

        methods: {
            getDataList(){
                let url = "https://interface.sina.cn/news/wap/fymap2020_data.d.json";
                this.$jsonp(url).then(res => {
                    this.add_daily=res.data.add_daily

                    this.dataDetail=res.data
                    console.log(this.dataDetail);

                });
            },
        },

        mounted() {
            this.getDataList()


            if(this.userData['adminPermission']=='0'){
                this.adminPermission=false
            }else{
                this.adminPermission=true
            }



        }
    }
</script>

<style lang="scss"  scoped>
    .home-container {
        padding: 10px;
    }
    .home-content{
        border-radius: 16px;
        box-shadow: 0 2px 20px rgba(0,0,0,.1);
        background-color: white;
        display: flex;
        width: 585px;
        height: 346px;
        margin: 10px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;


    }

    .single-content{
        text-align-last: center;

        width: 150px;
        height: 150px;
        /*background-color: #00B7FF;*/
        padding: 10px;
        margin: 10px;

    }
    .text-item{

        font-weight: bold;
        font-size: 24px;
    }
    .number{
        font-weight: bolder;
        font-size: 35px;
        display: block;
    }
    .added{
        font-weight: bolder;
        font-size: 17px;
        color: #999999;
    }
    .write_explain{
        cursor: pointer;
        .explain_content {

            font-size:13px;
            margin-top: 70px;
            display: none;
            position: absolute;
            z-index: 1;
            top: 0px;
            right: 73px;
            width: 345px;
            padding: 26px;
            background-color: #fff;
            border: 1px solid #c4cdd6;
            border-radius: 5px;
            box-sizing: border-box;
            box-shadow: 0 0 2px rgba(64, 64, 64, 0.4);
            p {
                padding: 0;
                margin: 0;
                line-height: 22px;
            }
        }
        &:hover .explain_content {
            display: block;
        }


    }



</style>
