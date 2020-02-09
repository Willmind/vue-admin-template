<template>
    <div style="height:717px;">
        <el-scrollbar style="height:100%">
            <editModel title="江西理工大学学术报告厅使用申请">

                <div slot="write_explain" class="write_explain">
                    注意事项
                    <div class="explain_content">
                        <p>1、在大学生学术报告厅中举行的活动应该是健康有益、积极向上的；若发现有与申请内容不相符的，由批准单位严肃处理。</p>
                        <p>2、申请者须提前到校团委值班室查询所申请时间是否已占用；经校团委批准后，申请者及时将此表交报告厅管理员，以便准备。</p>
                        <p>3、使用多媒体设备的全过程应有指导老师参加，指导老师名单应在申请书上注明。</p>
                        <p>4、使用大学生学术报告厅时，应爱护里面的设施，不得使用未经许可的设备，使用完后，应及时打扫报告厅内卫生。</p>
                        <p>5、使用后要将设备使用情况告知值班人员并由值班人员验收，如有桌面涂画或物品损坏，使用单位照价赔偿（桌子500元/张，椅子200元/张，无线话筒3000元/套，有线话筒1500元/套，其它物品按照有关规定执行）。</p>
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
                                        <el-form-item label="责任人">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="使用时间">
                                            <el-input></el-input>
                                        </el-form-item>
                                        <el-form-item label="联系电话">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>

                                </el-row>
                                <el-form-item label="指导老师">
                                    <el-input></el-input>
                                </el-form-item>

                                <el-form-item label="使用设备">
                                    <el-input></el-input>
                                </el-form-item>


                                <el-form-item label="活动内容">
                                    <el-input type="textarea"
                                              :rows="6"
                                              v-model="academicReportForm.text"></el-input>
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
        name: "classroomApply",
        components: {
            editModel
        },
        data() {
            return {
                academicReportForm: {},
                JSLX_option: ['普通', '多媒体'],
                XQJ_option: ['一', '二', '三', '四', '五', '六', '日'],
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
