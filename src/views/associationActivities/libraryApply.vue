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
                                            <el-input v-model="libraryApplyForm.unit"></el-input>
                                        </el-form-item>
                                        <el-form-item label="参加对象">
                                            <el-input v-model="libraryApplyForm.object"></el-input>
                                        </el-form-item>

                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="参加人数">
                                            <el-input v-model="libraryApplyForm.number"></el-input>
                                        </el-form-item>
                                        <el-form-item label="项目负责人电话">
                                            <el-input v-model="libraryApplyForm.phone"></el-input>
                                        </el-form-item>
                                    </el-col>

                                </el-row>
                                <el-form-item label="项目名称">
                                    <el-input v-model="libraryApplyForm.name"></el-input>
                                </el-form-item>

                                <el-row>

                                    <el-col :span="12">
                                        <el-form-item label="开始时间">
                                            <el-date-picker
                                                v-model="libraryApplyForm.startTime"
                                                :editable="false"
                                                type="datetime"
                                                placeholder="请选择时间">
                                            </el-date-picker>
                                        </el-form-item>
<!--                                        Equipment Requirements-->
                                        <el-form-item label="设备、设施使用要求">
                                            <el-select
                                                v-model="libraryApplyForm.equipRequirement"
                                                multiple
                                                collapse-tags
                                                placeholder="请选择">
                                                <el-option
                                                    v-for="item in equipRequirement_options"
                                                    :key="item"
                                                    :label="item"
                                                    :value="item">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="结束时间">
                                            <el-date-picker
                                                v-model="libraryApplyForm.endTime"
                                                :editable="false"
                                                type="datetime"
                                                placeholder="请选择时间">
                                            </el-date-picker>
                                        </el-form-item>

                                        <el-form-item label="填表日期">
                                            <el-date-picker
                                                v-model="libraryApplyForm.applyTime"
                                                :editable="false"
                                                type="date"
                                                placeholder="请选择日期">
                                            </el-date-picker>
                                        </el-form-item>
                                    </el-col>


                                </el-row>

                                <el-form-item label="备注">
                                    <el-input type="textarea"
                                              :rows="6"
                                              v-model="libraryApplyForm.text"></el-input>
                                </el-form-item>

                                <div class="footer">
                                    <el-button @click="back">
                                        返回
                                    </el-button>
                                    <el-button @click="add">
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
        name: "libraryApply",
        components:{
            editModel
        },
        data(){
            return{
                libraryApplyForm:{

                },
                equipRequirement_options:['话筒（会议话筒，无线话筒）','投影仪','空调','音响']
            }
        },
        methods:{
            add(){
                console.log(this.libraryApplyForm);
            },
            back(){
                this.$emit('goBack');

            },
        }
    }
</script>

<style scoped>

</style>
