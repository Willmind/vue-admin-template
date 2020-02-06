<template>
    <div style="height:717px;">
        <el-scrollbar style="height:100%">
            <editModel title="江西理工大学学生使用教室申请">

                <div slot="write_explain" class="write_explain">
                    注意事项
                    <div class="explain_content">
                        <p>1、在教室中举行的活动应该是健康、向上、积极、有益的。若发现有与申请内容不相符的或者影响正常教学秩序的，由批准单位严肃处理。</p>
                        <p>2、使用多媒体设备的全过程应有指导老师参加，指导老师名单应在申请书上注明。</p>
                        <p>3、使用多媒体教室设备时，应爱护里面的设施，不得使用未经许可的设备，使用完后，应及时将设备钥匙交还给中心值班人员，并将设备使用情况告知值班人员。以保证后续课程的正常进行。</p>
                    </div>
                </div>
                <div slot="main">
                    <div style="height:717px;">
                        <div class="main-tap">
                            <el-form label-width="150px">
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="使用班级">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="联系电话">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="指导教师">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="学生联系人">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="学生所在学院或社团">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="指导教师电话">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                </el-row>

                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="使用周次">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="使用节次">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="教室类型">
                                            <el-select v-model="classForm.JSLX" placeholder="请选择">
                                                <el-option
                                                    v-for="item in JSLX_option"
                                                    :key="item"
                                                    :label="item"
                                                    :value="item"
                                                >
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="星期几">
                                            <el-select v-model="classForm.XQJ" placeholder="请选择">
                                                <el-option
                                                    v-for="item in XQJ_option"
                                                    :key="item"
                                                    :label="item"
                                                    :value="item"
                                                >
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="使用人数">
                                            <el-input></el-input>
                                        </el-form-item>

                                        <el-form-item label="使用教室">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>


                                </el-row>

                                <el-form-item label="活动内容说明">
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
