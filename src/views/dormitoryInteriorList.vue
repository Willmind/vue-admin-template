<template>
    <div>
        <div>
            <div class="row">
                <el-button size="mini" @click="add" icon="el-icon-plus">新增</el-button>
                <el-button size="mini" icon="el-icon-delete" type="primary">删除</el-button>
            </div>
            <!--            搜索条件-->
            <div class="check">
                <el-input clearable size="mini" v-model="searchParams.buildingNum"  prefix-icon="el-icon-office-building" placeholder="栋数"></el-input>
                <el-input clearable size="mini" v-model="searchParams.domNum"  prefix-icon="el-icon-office-building" placeholder="宿舍号"></el-input>
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
            <div>
                <el-table
                    border
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <el-dialog  title="宿舍内务检查新增" :visible.sync="dialogFormVisible">
            <el-form  label-width="100px">
                <el-row>
                    <el-col span="12">
                        <el-form-item label="栋数">
                            <el-input clearable prefix-icon="el-icon-office-building" v-model="addForm.buildingNum" placeholder="请输入栋数"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col span="12">
                        <el-form-item label="宿舍号">
                            <el-input clearable prefix-icon="el-icon-office-building" v-model="addForm.domNum" placeholder="请输入宿舍号"></el-input>
                        </el-form-item>
                    </el-col>


                </el-row>

                <el-row>
                    <el-col span="12">
                        <el-form-item label="检查人员">
                            <el-input clearable prefix-icon="el-icon-user" v-model="addForm.checkPerson" placeholder="请输入检查人员"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col span="12">
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
                    <el-col span="12">
                        <el-form-item label="评分">
                            <el-rate style="margin-top: 9px;"
                                v-model="addForm.rate"
                                :colors="colors">
                            </el-rate>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col >
                        <el-form-item label="备注">
                            <el-input clearable
                                type="textarea"
                                :rows="3"
                                placeholder="请输入内容"
                                v-model="addForm.textarea">
                            </el-input>                        </el-form-item>
                    </el-col>

                </el-row>


            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
                addForm:{
                    textarea:'',
                    rate:'',
                    time:'',
                    checkPerson:'',
                    buildingNum:'',
                    domNum:'',
                },

                colors: ['#99A9BF', '#F7BA2A', '#FF9900'] , // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
                searchParams: {
                    time:'',
                    domNum:'',
                    buildingNum: '',

                },
                dialogFormVisible: false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
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
            refresh(){
                for(let index in this.searchParams){
                    this.searchParams[index] = '';
                }
            },
            add() {
                this.dialogFormVisible = true

            },
            test() {
                console.log(111)
                axios.post("/users/dormitoryInteriorList").then((response) => {
                    console.log(response);
                })

            },
        },
        mounted() {
            this.test()
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
    }

    .el-input {
        margin-right: 5px;
        width: 150px;
    }

    .el-table {
        margin: 10px;
        margin-left: 15px;
        max-width: 1045px;
    }



</style>
