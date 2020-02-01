<template>
    <div>
        <div>
            <div class="row">
                <el-button size="mini" @click="add" icon="el-icon-plus">新增</el-button>
                <el-button size="mini" icon="el-icon-delete" type="primary">删除</el-button>
            </div>
            <!--            搜索条件-->
            <div class="check">
                <el-input size="mini" v-model="searchParams.buildingNum" prefix-icon="el-icon-office-building" placeholder="栋数"></el-input>
                <el-input size="mini" v-model="searchParams.domNum" prefix-icon="el-icon-office-building" placeholder="宿舍号"></el-input>
                <el-date-picker
                    v-model="searchParams.time"
                    type="date"
                    size="mini"
                    :editable=false
                    placeholder="选择日期">
                </el-date-picker>
                <el-button style="margin-left: 5px" size="mini" icon="el-icon-search" @click="search">搜索</el-button>
                <el-button size="mini" icon="el-icon-refresh-left" @click="refresh">重置</el-button>
            </div>
            <!--            表格-->
            <div class="tableForm">
                <el-table
                    :cell-style="cellStyle"
                    :header-cell-style="rowClass"
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
                    <el-table-column
                        label="分数">
                        <template slot-scope="scope">
<!--                            <el-popover trigger="hover" placement="top">-->
<!--                                <p>姓名: {{ scope.row.score}}</p>-->
<!--                                <p>住址: {{ 2}}</p>-->
<!--                                <div slot="reference" class="name-wrapper">-->
<!--                                    <el-tag size="medium">{{ 3}}</el-tag>-->
<!--                                </div>-->
<!--                            </el-popover>-->
                            <el-rate
                                v-model=scope.row.score
                                disabled
                                text-color="#ff9900">
                            </el-rate>

                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <el-dialog width="75%" title="宿舍内务检查编辑" :visible.sync="dialogFormVisible">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="栋数">
                            <el-input prefix-icon="el-icon-office-building" v-model="addForm.buildingNum" placeholder="请输入栋数"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="宿舍号">
                            <el-input prefix-icon="el-icon-office-building" v-model="addForm.domNum" placeholder="请输入宿舍号"></el-input>
                        </el-form-item>
                    </el-col>


                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="检查人员">
                            <el-input prefix-icon="el-icon-user" v-model="addForm.checkPerson" placeholder="请输入检查人员"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="检查时间">

                            <el-date-picker
                                type="date"
                                :editable=false
                                placeholder="选择日期"
                                v-model="addForm.time">
                            </el-date-picker>

                        </el-form-item>
                    </el-col>


                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="评分">
                            <el-rate style="margin-top: 9px;"
                                     v-model="addForm.rate"
                                     :colors="colors">
                            </el-rate>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col>
                        <el-form-item label="备注">
                            <el-input
                                type="textarea"
                                :rows="4"
                                placeholder="请输入内容"
                                v-model="addForm.textarea">
                            </el-input>
                        </el-form-item>
                    </el-col>

                </el-row>


            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCheck">确 定</el-button>
            </div>
        </el-dialog>


    </div>

</template>

<script>
    import axios from 'axios'
    import {dateFormat} from "../libs/date"
    import {deepClone} from "../libs/util";

    export default {
        name: 'dormitoryInteriorList',
        components: {},
        data() {
            return {
                addForm: {
                    textarea: '',
                    rate: '',
                    time: '',
                    checkPerson: '',
                    buildingNum: '',
                    domNum: '',
                },

                colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
                searchParams: {
                    time: '',
                    domNum: '',
                    buildingNum: '',

                },
                dialogFormVisible: false,
                tableData: [],
            }
        },
        methods: {
            cellStyle({row, column, rowIndex, columnIndex}) {
                return "text-align:center"

            },
            rowClass({row, rowIndex}) {
                return "text-align:center"
            },



            handleEdit(index, row) {
                console.log(row.cid);
                this.dialogFormVisible = true
                this.clearData()
                axios.post("/users/uploadDormInterior",{
                    cid:row.cid
                }).then((response) => {
                    console.log(response);
                    if(response.msg=='查询成功'){
                        this.addForm=response.result

                    }else{
                        this.$message({
                            type: 'error',
                            message: '查询失败!'
                        });

                    }

                })


            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.del(row)
                }).catch(() => {

                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            del(row) {
                console.log(row);
                axios.post("/users/delDormInteriorList", {
                    cid: row.cid
                }).then((response) => {
                    if (response.msg == "操作成功") {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getDataList()
                    } else {
                        this.$message({
                            type: 'error',
                            message: '操作失败!'
                        });
                    }
                })
            },


            refresh() {
                for (let index in this.searchParams) {
                    this.searchParams[index] = '';
                }
                this.getDataList()

            },
            clearData(){
                for (let index in this.addForm) {
                    this.addForm[index] = '';
                    this.addForm.rate=0
                }
            },
            add() {
                this.dialogFormVisible = true
                this.clearData()

            },
            addCheck() {
                let params=deepClone(this.addForm)
                params.time = dateFormat(params.time, 'YYYY-MM-DD')
                console.log(params);

                axios.post("/users/addDormInteriorList",params).then((response) => {
                    console.log(response);
                    if(response.msg=='新增成功'){
                        this.$message({
                            type: 'success',
                            message: '新增成功!'
                        });
                        this.getDataList()
                    }else{
                        this.$message({
                            type: 'success',
                            message: '新增失败!'
                        });
                    }
                })
                this.dialogFormVisible = false
                this.clearData()

            },
            getDataList() {
                let params=deepClone(this.searchParams)
                params.time=dateFormat(params.time,'YYYY-MM-DD')
                console.log(params);
                axios.post("/users/dormitoryInteriorList",{
                    buildingNum:params.buildingNum,
                    domNum:params.domNum,
                    time:params.time
                }).then((response) => {
                    this.tableData = response.result
                    console.log(this.tableData);
                })

            },
            search(){
                this.getDataList()
            },
        },
        mounted() {
            this.getDataList()
        }


    }

</script>

<style lang="scss" scoped>

    .row {
        padding: 5px;
        margin: 5px;
        margin-left: 10px;
    }

    .check {
        display: flex;
        padding: 5px;
        margin-left: 10px;

        .el-input {
            margin-right: 5px;
            width: 150px;
        }
    }


    .tableForm {
        margin: 10px;
        margin-left: 15px;
        margin-right: 15px;
    }


</style>
