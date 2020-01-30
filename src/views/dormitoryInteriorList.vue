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
                    style="margin-left: 5px;"
                    size="mini"
                    align="left"
                    :editable=false
                    type="date"
                    v-model="searchParams.time"
                    placeholder="选择日期"
                    :picker-options="pickerOptions">
                </el-date-picker>
                <el-button style="margin-left: 5px" size="mini" icon="el-icon-search">搜索</el-button>
                <el-button size="mini" icon="el-icon-refresh-left" @click="refresh">重置</el-button>
            </div>
            <!--            表格-->
            <div class="tableForm">
                <el-table
                    :cell-style="cellStyle"
                    :header-cell-style="rowClass"
                    border
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
                        prop="score"
                        label="分数"
                    >
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

        <el-dialog width="75%" title="宿舍内务检查新增" :visible.sync="dialogFormVisible">
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
                                align="left"
                                type="date"
                                :editable=false
                                placeholder="选择日期"
                                v-model="addForm.time"
                                :picker-options="pickerOptions">
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
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
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
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {

                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },




            refresh() {
                for (let index in this.searchParams) {
                    this.searchParams[index] = '';
                }
            },
            add() {
                this.dialogFormVisible = true
            },
            addCheck() {
                console.log(this.addForm);
            },
            getDataList() {
                console.log(111)
                axios.post("/users/dormitoryInteriorList").then((response) => {
                    console.log(response.result);
                    this.tableData=response.result
                })
            }
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
