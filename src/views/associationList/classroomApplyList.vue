<template>
    <div>
        <transition name="fade-transform" mode="out-in">
            <div v-if="classroomApplyList" style="height:717px;">
                <el-scrollbar style="height:100%">
                    <listModel title="教室申请列表">

                        <div slot="conditionSearch">
                            <div class="row1">

                                <el-button size="mini" @click="add" icon="el-icon-plus">新增</el-button>
                                <el-button size="mini" @click="del" icon="el-icon-delete" type="primary">删除</el-button>
                            </div>

                            <div class="row2">

                                <div class="left">

                                    <el-input size="mini"  prefix-icon="el-icon-office-building" v-model="searchParams.class" placeholder="使用班级"></el-input>
                                    <el-input size="mini"  prefix-icon="el-icon-user" v-model="searchParams.student" placeholder="学生联系人"></el-input>
                                    <el-button size="mini" @click="search" icon="el-icon-search">搜索</el-button>
                                    <el-button size="mini" @click="refresh" icon="el-icon-refresh-right" type="primary">重置</el-button>



                                </div>

                            </div>



                        </div>

                        <div slot="table">

                            <el-table
                                border
                                max-height="512"
                                :data="tableData"
                                @selection-change="handleSelectionChange"
                                style="width: 1350px">
                                <el-table-column
                                    fixed
                                    type="selection"
                                    min-width="55" >
                                </el-table-column>
                                <el-table-column
                                    min-width="100"
                                    prop="class"
                                    label="使用班级"
                                >
                                </el-table-column>
                                <el-table-column
                                    min-width="100"
                                    prop="student"
                                    label="学生联系人"
                                >
                                </el-table-column>
                                <el-table-column
                                    min-width="100"
                                    prop="phone"
                                    label="联系电话"
                                >
                                </el-table-column>
                                <el-table-column
                                    min-width="150"
                                    prop="organization"
                                    label="学生所在学院或社团"
                                >
                                </el-table-column>
                                <el-table-column
                                    min-width="100"
                                    prop="teacher"
                                    label="指导老师"
                                >
                                </el-table-column>
                                <el-table-column
                                    min-width="100"
                                    prop="teacherPhone"
                                    label="指导老师电话"
                                >
                                </el-table-column>
                                <el-table-column
                                    min-width="100"
                                    prop="week"
                                    label="使用周次"
                                >
                                </el-table-column>


                                <el-table-column
                                    min-width="100"
                                    prop="whichDay"
                                    label="星期几"
                                >
                                </el-table-column>

                                <el-table-column
                                    min-width="100"
                                    prop="section"
                                    label="使用节次"
                                >
                                </el-table-column>
                                <el-table-column
                                    min-width="100"
                                    prop="number"
                                    label="使用人数"
                                >
                                </el-table-column> <el-table-column
                                min-width="100"
                                prop="classroomType"
                                label="教室类型"
                            >
                            </el-table-column>
                                <el-table-column
                                    min-width="100"
                                    prop="classRoom"
                                    label="使用教室"
                                >
                                </el-table-column>

                                <el-table-column
                                    min-width="100"
                                    prop="applyTime"
                                    label="填表日期"
                                >
                                </el-table-column>

                                <!--                        <el-table-column-->
                                <!--                            label="分数">-->
                                <!--                            <template slot-scope="scope">-->
                                <!--                                &lt;!&ndash;                            <el-popover trigger="hover" placement="top">&ndash;&gt;-->
                                <!--                                &lt;!&ndash;                                <p>姓名: {{ scope.row.score}}</p>&ndash;&gt;-->
                                <!--                                &lt;!&ndash;                                <p>住址: {{ 2}}</p>&ndash;&gt;-->
                                <!--                                &lt;!&ndash;                                <div slot="reference" class="name-wrapper">&ndash;&gt;-->
                                <!--                                &lt;!&ndash;                                    <el-tag size="medium">{{ 3}}</el-tag>&ndash;&gt;-->
                                <!--                                &lt;!&ndash;                                </div>&ndash;&gt;-->
                                <!--                                &lt;!&ndash;                            </el-popover>&ndash;&gt;-->
                                <!--                                <el-rate-->
                                <!--                                    v-model=scope.row.score-->
                                <!--                                    disabled-->
                                <!--                                    text-color="#ff9900">-->
                                <!--                                </el-rate>-->

                                <!--                            </template>-->
                                <!--                        </el-table-column>-->
                                <el-table-column fixed="right" label="操作" min-width="200">
                                    <template slot-scope="scope">
                                        <el-button
                                            icon="el-icon-edit"
                                            size="mini"
                                            @click="handleEdit(scope.$index, scope.row)">编辑
                                        </el-button>
                                        <el-button
                                            icon="el-icon-delete"
                                            size="mini"
                                            type="danger"
                                            @click="delSingle(scope.$index, scope.row)"
                                        >删除
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>





                        </div>



                    </listModel>

                </el-scrollbar>
            </div>

        </transition>

        <transition name="fade-transform" mode="out-in">
            <div v-if="classroomApply">
                <classroomApply @goBack="back()" :rid="rid"></classroomApply>
            </div>
        </transition>




    </div>

</template>

<script>
    import axios from 'axios'
    import listModel from "../models/listModel";
    import classroomApply from "../associationActivities/classroomApply";
    import {deepClone} from "../../libs/util";
    export default {
        name: "classroomApplyList",
        components:{
            listModel,
            classroomApply
        },
        data(){
          return{
              delRids:'',
              searchParams:{

              },
              rid:'',
              tableData:[],
              classroomApplyList:true,
              classroomApply:false

          }
        },
        methods:{
            search(){
                this.getDataList()
            },
            refresh(){
                this.clearData()
                this.getDataList()
            },
            clearData(){
                for(let index in this.searchParams){
                    this.searchParams[index] = '';
                }
            },
            add(){
                this.classroomApplyList=false
                this.classroomApply=true
                console.log(1);
            },
            back(){
                this.classroomApplyList=true
                this.classroomApply=false
                this.rid = '';
                this.refresh()
            },
            getDataList(){
                axios.post("/users/classFormList",{
                    class:this.searchParams.class,
                    student:this.searchParams.student,
                }).then((response) => {
                    console.log(response);
                    if(response.msg=='查询成功'){
                        this.tableData=response.result
                    }
                })
            },
            handleEdit(index,row){
                console.log(row.rid);
                this.rid=row.rid
                this.add()

            },
            delSingle(index,row){
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    axios.post("/users/delclassFormList",{
                        delRids:'\''+row.rid+'\''
                    }).then((response) => {
                        if(response.msg=='操作成功'){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.refresh()

                        }else{
                            this.$message({
                                type: 'error',
                                message: '操作失败!'
                            });
                        }


                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            del(){
                if(this.delRids!==''){
                    this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {

                        axios.post("/users/delclassFormList",{
                            delRids:this.delRids
                        }).then((response) => {
                            if(response.msg=='操作成功'){
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                this.refresh()

                            }else{
                                this.$message({
                                    type: 'error',
                                    message: '操作失败!'
                                });
                            }


                        })

                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });
                }else {
                    this.$message({
                        type: 'info',
                        message: '请选择'
                    });
                }



            },
            handleSelectionChange(val){
                let rids = [];
                for(let index in val){
                    rids.push('\''+val[index].rid+'\'');
                }
                console.log(rids);
                this.delRids = rids.join(",");
                console.log(this.delRids);
            },

        },
        mounted() {
            this.getDataList()

        }

    }
</script>
<style>
    .el-table td,.el-table th{
        text-align: center!important;
    }

</style>

<style scoped>

</style>
