<template>
    <div style="height:717px;">
        <el-scrollbar style="height:100%">
            <editModel title="江西理工大学社团活动申请">

                <div slot="write_explain" class="write_explain">
                    注意事项
                    <div class="explain_content">
                        <p>暂无</p>
                    </div>
                </div>
                <div slot="main">
                    <div style="height:717px;">
                        <div class="main-tap">
                            <el-form label-width="150px">
                                <el-form-item label="社团名称">
                                    <el-input></el-input>
                                </el-form-item>

                                <el-form-item label="活动名称">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-row>
                                    <el-col :span="12">

                                        <el-form-item label="活动负责人">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="活动时间">
                                            <el-date-picker
                                                type="date"
                                                placeholder="选择日期">
                                            </el-date-picker>
                                        </el-form-item>

                                        <el-form-item label="有无指导老师参与">
                                            <el-input></el-input>
                                        </el-form-item>

                                        <el-form-item label="老师联系方式">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="联系方式">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="活动地点">
                                            <el-input></el-input>
                                        </el-form-item>

                                        <el-form-item label="指导老师姓名">
                                            <el-input></el-input>
                                        </el-form-item>

                                    </el-col>

                                </el-row>

                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="预计成员参与人数">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="实际成员参与人数">
                                            <el-input></el-input>
                                        </el-form-item>

                                    </el-col>

                                    <el-col :span="12">

                                        <el-form-item label="财务预算总额">
                                            <el-input></el-input>
                                        </el-form-item>

                                        <el-form-item label="财务决算总额">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>


                                </el-row>

                                <el-form-item label="活动内容简述">
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

            }
        },
        methods:{
            add(){
                console.log(this.classForm);
            }
        }
    }
</script>

<style scoped>

</style>
