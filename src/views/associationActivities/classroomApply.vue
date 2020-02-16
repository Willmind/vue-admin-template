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
                                            <el-input clearable  v-model="classForm.class"></el-input>
                                        </el-form-item>
                                        <el-form-item label="联系电话">
                                            <el-input clearable v-model="classForm.phone"></el-input>
                                        </el-form-item>
                                        <el-form-item label="指导教师">
                                            <el-input clearable v-model="classForm.teacher"></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="学生联系人">
                                            <el-input clearable v-model="classForm.student"></el-input>
                                        </el-form-item>
                                        <el-form-item label="学生所在学院或社团">
                                            <el-input clearable v-model="classForm.organization"></el-input>
                                        </el-form-item>
                                        <el-form-item label="指导教师电话">
                                            <el-input clearable v-model="classForm.teacherPhone"></el-input>
                                        </el-form-item>
                                    </el-col>

                                </el-row>

                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="使用周次">
                                            <el-input clearable v-model="classForm.week"></el-input>


                                        </el-form-item>
                                        <el-form-item label="使用节次">
                                            <el-select clearable
                                                v-model="classForm.section"
                                                multiple
                                                collapse-tags
                                                placeholder="请选择">
                                                <el-option
                                                    v-for="item in section_options"
                                                    :key="item"
                                                    :label="item"
                                                    :value="item">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="教室类型">
                                            <el-select clearable v-model="classForm.classroomType" placeholder="请选择">
                                                <el-option
                                                    v-for="item in classroomType_option"
                                                    :key="item"
                                                    :label="item"
                                                    :value="item"
                                                >
                                                </el-option>
                                            </el-select>
                                        </el-form-item>

                                        <el-form-item label="填表日期">
                                            <el-date-picker
                                                type="date"
                                                :editable=false
                                                placeholder="选择日期"
                                                v-model="classForm.applyTime">
                                            </el-date-picker>

                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item label="星期几">
                                            <el-select clearable v-model="classForm.whichDay" placeholder="请选择">
                                                <el-option
                                                    v-for="item in whichDay_option"
                                                    :key="item"
                                                    :label="item"
                                                    :value="item"
                                                >
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="使用人数">
                                            <el-input clearable v-model="classForm.number"></el-input>
                                        </el-form-item>

                                        <el-form-item label="使用教室">
                                            <el-input clearable v-model="classForm.classRoom"></el-input>
                                        </el-form-item>
                                    </el-col>


                                </el-row>

                                <el-form-item label="活动内容说明">
                                    <el-input clearable type="textarea"
                                              :rows="6"
                                              v-model="classForm.text"></el-input>
                                </el-form-item>

                                <div class="footer">
                                    <el-button icon="el-icon-back" @click="back">
                                        返回
                                    </el-button>
                                    <el-button type="primary" icon="el-icon-folder-checked" @click="add">
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
    import axios from 'axios'
    import {dateFormat} from "../../libs/date";
    import {deepClone} from "../../libs/util";
    import editModel from "../models/editModel";

    export default {
        name: "classroomApply",
        components: {
            editModel
        },
        props:{
            rid:{
                type:String,
                default:''
            },

        },
        data() {
            return {
                classForm: {
                    class: '',
                    phone: '',
                    teacher: '',
                    student: '',
                    organization: '',
                    teacherPhone: '',
                    week: '',
                    section: [],
                    classroomType: '',
                    whichDay: '',
                    number: '',
                    classRoom: '',
                    text: '',
                    applyTime:'',


                },
                section_options: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
                whichDay_option: ['一', '二', '三', '四', '五', '六', '日'],
                classroomType_option: ['普通', '多媒体'],
            }
        },
        methods: {
            add() {
                let params=deepClone(this.classForm)
                console.log(params);
                params.applyTime=dateFormat(params.applyTime,'YYYY-MM-DD')
                params.section=params.section.join(',')

                axios.post("/users/addClassFormList",params).then((response)=>{
                    console.log(response);
                    if(response.msg=='操作成功'){
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        });
                    }else{
                        this.$message({
                            message: '保存失败',
                            type: 'error'
                        });

                    }
                })
            },
            back(){
                this.$emit('goBack');


            },
            getDataDetail(){
                axios.post("/users/classFormQueryOne",{rid:this.rid}).then((response)=>{
                    console.log(response.result);
                    if(response.msg=='查询成功'){
                        this.classForm=response.result
                        this.classForm.section=response.result.section.split('')
                    }

                })

            },
        },
        mounted() {
            console.log(this.rid);
            if(this.rid){
                this.getDataDetail()
            }else{
                this.classForm.applyTime = new Date()

            }




        }
    }
</script>

<style scoped>

</style>
