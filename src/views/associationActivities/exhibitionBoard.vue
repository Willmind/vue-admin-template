<template>
    <div style="height:717px;">
        <el-scrollbar style="height:100%">
            <editModel title="江西理工大学社团联合会展板申请">

                <div slot="write_explain" class="write_explain">
                    注意事项
                    <div class="explain_content">
                        <p>1、展板用完后，要把展板上的海报材料清理，保持板面整洁</p>
                        <p>2、展板使用时要注意保护，不可随地拖拉，一旦出现损坏，由责任人赔偿</p>
                        <p>3、本表一式三份，团委、社联、社团各执一份，留底存档</p>
                    </div>
                </div>
                <div slot="main">
                    <div style="height:717px;">
                        <div class="main-tap">
                            <el-form label-width="150px">
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="申请社团">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="借用数量">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="联系电话">
                                            <el-input></el-input>
                                        </el-form-item>

                                        <el-form-item label="预归还时间">
                                            <el-input></el-input>
                                        </el-form-item>

                                        <el-form-item label="填表日期">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="活动名称">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="责任人">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="借用时间">
                                            <el-input></el-input>
                                        </el-form-item>

                                        <el-form-item label="实归还时间">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                </el-row>


                                <el-form-item label="指导老师">
                                    <el-input></el-input>
                                </el-form-item>


                                <el-form-item label="备注">
                                    <el-input type="textarea"
                                              :rows="6"></el-input>
                                </el-form-item>

                                <div class="footer">
                                    <el-button @click="back">
                                        返回
                                    </el-button>
                                    <el-button >
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
        name: "exhibitionBoard",
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
        methods:{
            back(){
                this.$emit('goBack');

            }
        }
    }
</script>

<style scoped>

</style>
