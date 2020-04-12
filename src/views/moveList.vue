<template>
    <div class="main">
        <el-card>
            <div style="width: 400px">
                <div class="title">
                    <svg class="icon closeImg" aria-hidden="true">
                        <use xlink:href="#icon-zhongguo1"></use>
                    </svg>
                    <h1>{{$t('m.MigratingCities')}}</h1>
                </div>
                <div style="margin: 10px 0">
                    <span>{{$t('m.By')}}&nbsp;{{time}}&nbsp;{{$t('m.comefromBaiduMap')}}</span>

                </div>

                <el-tabs type="border-card">
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-s-home"></i> {{$t('m.PopularImmigration')}}</span>
                        <el-table
                            :data="tableData1"
                            border
                            stripe
                            cell-style="font-weight: 700;"
                            style="width: 100%">
                            <el-table-column
                                type="index"
                                width="70">
                                <template slot="header" slot-scope="scope">
                                    <span>{{$t('m.Rank')}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="city_name"

                                width="150">
                                <template slot="header" slot-scope="scope">
                                    <span>{{$t('m.City')}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="value"
                                >
                                <template slot="header" slot-scope="scope">
                                    <span>{{$t('m.ImmigrationRate')}}</span>
                                </template>
                            </el-table-column>
                        </el-table>


                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-s-promotion"></i> {{$t('m.PopularEmigration')}}</span>
                        <el-table
                            :data="tableData2"
                            border
                            stripe
                            cell-style="font-weight: 700;"
                            style="width: 100%">
                            <el-table-column

                                type="index"
                                width="70">
                                <template slot="header" slot-scope="scope">
                                    <span>{{$t('m.Rank')}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="city_name"

                                width="150">
                                <template slot="header" slot-scope="scope">
                                    <span>{{$t('m.City')}}</span>
                                </template>
                            </el-table-column>

                            <el-table-column
                                prop="value"
                                >
                                <template slot="header" slot-scope="scope">
                                    <span>{{$t('m.EmigrationRate')}}</span>
                                </template>
                            </el-table-column>
                        </el-table>


                    </el-tab-pane>
                </el-tabs>

            </div>
        </el-card>


    </div>
</template>

<script>
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: "moveList",
        computed: {
            ...mapState(
                {
                    MoveList: 'MoveList'
                }
            )
        },
        data() {
            return {
                tableData1: [],
                tableData2: [],
                time: '',


            }
        },
        methods: {},
        mounted() {
            axios.get('getMoveList').then((res) => {
                this.$store.commit('updateMoveList', res.result)
                this.tableData1 = this.MoveList.moveInList
                this.tableData2 = this.MoveList.moveOutList
                console.log(res.result.time);
                this.time = res.result.time.slice(0, 4) + '-' + res.result.time.slice(4, 6) + '-' + res.result.time.slice(6)
                console.log(this.time);
            })

        }
    }
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 20px;
    }

    .icon {
        width: 3em;
        height: 3em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .title {
        margin: 10px 0 0 0;
        display: flex;
        justify-content: center;
        text-align: center;
    }


    .el-tabs--border-card {
        /deep/
        .el-tabs__item.is-active {
            font-weight: bold;
        }

        /deep/
        .el-tabs__item {
            font-weight: bold;
        }
    }


</style>
