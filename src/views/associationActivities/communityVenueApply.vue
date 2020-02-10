<template>
    <div style="height:717px;">
        <el-scrollbar style="height:100%">
            <editModel title="江西理工大学社团联合会社团活动场地申请">

                <div slot="write_explain" class="write_explain">
                    注意事项
                    <div class="explain_content">
                  zsz      <p>1、场地用完后，要安排后勤人进行打扫，保持场面清洁，设备的完整</p>
                    </div>
                </div>
                <div slot="main">
                    <div style="height:717px;">
                        <div class="main-tap">
                            <el-form label-width="150px">
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="社团名称">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="活动名称">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="活动时间">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="活动负责人">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="联系电话">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="申请地点">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                </el-row>


                                <el-form-item label="场地设备要求">
                                    <el-input></el-input>
                                </el-form-item>


                                <el-form-item label="宣传或张贴的内容">
                                    <el-input type="textarea"
                                              :rows="4"></el-input>
                                </el-form-item>

                                <el-form-item label="活动内容简介">
                                    <el-input type="textarea"
                                              :rows="6"></el-input>
                                </el-form-item>

                                <div class="footer">
                                    <el-button icon="el-icon-back"  @click="back">
                                        返回
                                    </el-button>
                                    <el-button type="primary" icon="el-icon-folder-checked" >
                                        保存
                                    </el-button>

                                </div>







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
        },
       methods: {

           back() {
               this.$emit('goBack');

           }

       }
    }
</script>

<style scoped>

</style>
