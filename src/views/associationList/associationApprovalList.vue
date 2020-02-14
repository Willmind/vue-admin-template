<template>
    <div>
        <div v-if="associationApprovalList">
            <listModel title="社团活动申请列表">

                <div slot="conditionSearch">
                    <div class="row1">

                        <el-button size="mini" @click="add" icon="el-icon-plus">新增</el-button>
                        <el-button size="mini" icon="el-icon-delete" type="primary">删除</el-button>
                    </div>

                    <div class="row2">

                        <div class="left">

                            <el-input clearable size="mini"  prefix-icon="el-icon-office-building" placeholder="栋数"></el-input>
                            <el-input clearable size="mini"  prefix-icon="el-icon-office-building" placeholder="宿舍号"></el-input>


                        </div>

                    </div>



                </div>

                <div slot="table">

                    <el-table
                        border
                        max-height="512"
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            type="selection"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="检查时间"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="checkPerson"
                            label="检查人员"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="buildingNum"
                            label="栋数"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="domNum"
                            label="宿舍号"
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
                        <!--                        <el-table-column label="操作" width="150">-->
                        <!--                            <template slot-scope="scope">-->
                        <!--                                <el-button-->
                        <!--                                    size="mini"-->
                        <!--                                    @click="handleEdit(scope.$index, scope.row)">编辑-->
                        <!--                                </el-button>-->
                        <!--                                <el-button-->
                        <!--                                    size="mini"-->
                        <!--                                    type="danger"-->
                        <!--                                    @click="handleDelete(scope.$index, scope.row)">删除-->
                        <!--                                </el-button>-->
                        <!--                            </template>-->
                        <!--                        </el-table-column>-->
                    </el-table>





                </div>



            </listModel>
        </div>

        <div v-if="associationApproval">
            <associationApproval @goBack="back()"></associationApproval>
        </div>


    </div>

</template>

<script>
    import listModel from "../models/listModel";
    import associationApproval from "../associationActivities/associationApproval";
    export default {
        name: "associationApprovalList",
        components:{
            listModel,
            associationApproval
        },
        data(){
            return{
                tableData:[],
                associationApprovalList:true,
                associationApproval:false

            }
        },
        methods:{
            add(){
                this.associationApprovalList=false
                this.associationApproval=true
                console.log(1);
            },
            back(){
                this.associationApprovalList=true
                this.associationApproval=false
                console.log(1);
            },

        },
        mounted() {

        }

    }
</script>

<style scoped>

</style>
