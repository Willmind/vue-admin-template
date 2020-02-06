<template>
    <div style="height:717px;">
        <el-scrollbar style="height:100%">
            <editModel title="江西理工大学图书馆学术报告厅使用申请">

                <div slot="write_explain" class="write_explain">
                    说明
                    <div class="explain_content">
                        <p>1、使用单位须提前3个工作日预约，并加盖单位公章，否则预约无效。</p>
                        <p>2、“项目负责人”必须是预约单位的老师。</p>
                        <p>3、“设备、使用设施要求”栏填写非固定安装的设备、设施，如话筒、投影机等设备。</p>
                        <p>4、图书馆学术报告厅服务项目的预约登记手续，电话：8312244。</p>
                        <p>5、学生进入学术报告厅必须至少有一位负责老师或辅导员到现场，维持秩序。</p>
                        <p>6、报告厅有254个座位。</p>
                        <p>7、活动结束后，使用单位组织人员清走横幅等。</p>
                    </div>
                </div>
                <div slot="main">
                    <div style="height:717px;">
                        <div class="main-tap">
                            <el-form label-width="150px">
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="使用单位">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="参加对象">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="项目名称">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="参加人数">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="项目负责人电话">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                </el-row>

                                <el-row>

                                    <el-col :span="12">
                                        <el-form-item label="开始时间">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="设备、设施使用要求">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="结束时间">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>


                                </el-row>

                                <el-form-item label="备注">
                                    <el-input type="textarea"
                                              :rows="6"></el-input>
                                </el-form-item>







                            </el-form>
                        </div>


                    </div>





                </div>



            </editModel>

        </el-scrollbar>


    </div>

</template>

<script>
    import editModel from "../models/editModel";
    export default {
        name: "classroomApply",
        components:{
            editModel
        },
        data(){
            return{
                classForm:{

                },
                JSLX_option:['普通','多媒体'],
                XQJ_option:['一','二','三','四','五','六','日'],
            }
        }
    }
</script>

<style scoped>

</style>
