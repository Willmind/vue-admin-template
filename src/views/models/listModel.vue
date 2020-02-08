<template>
    <div class="listMode">

        <div v-if="title != ''" class="title">
            <span class="name">{{title}}</span>
        </div>

        <slot v-else name="title">

        </slot>

        <div>
            <slot name="write_explain">

            </slot>
        </div>

        <div class="conditionSearch">
            <slot name="conditionSearch">

            </slot>
        </div>

        <div class="table">
            <slot name="table">

            </slot>
        </div>

        <div class="main">
            <slot name="main">

            </slot>
        </div>

        <div class="footer">
            <slot name="footer">

            </slot>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .listMode {
        position: relative;
        min-width: 1100px;
        padding: 15px 35px;
        box-sizing: border-box;

        .title{
            & >.name {
                display: inline-block;
                color: #3c6abe;
                font-size: 18px;
                font-weight: 550;
                padding: 2px 4px;
                border-bottom: 3px solid #3c6abe;
            }


        }
        .write_explain{
            position: absolute;
            right: 0;
            margin-right: 50px;
            color: #455563;
            text-decoration: underline;
            cursor: pointer;
            // float: right;
            .explain_content {
                margin-top: 37px;
                display: none;
                position: absolute;
                z-index: 999;
                top: 0px;
                right: 0;
                width: 340px;
                padding: 26px;
                background-color: #fff;
                border: 1px solid #c4cdd6;
                border-radius: 5px;
                box-sizing: border-box;
                box-shadow: 0 0 2px rgba(64, 64, 64, 0.4);
                p {
                    padding: 0;
                    margin: 0;
                    line-height: 22px;
                }
            }
            &:hover .explain_content {
                display: block;
            }
        }


        .conditionSearch {
            .row1 {
                margin-top: 15px;

            }

            .row2 {
                display: flex;
                justify-content: space-between;
                margin-top: 15px;

                .left {
                    display: flex;
                    justify-content: flex-start;
                    /deep/ .el-input{
                        margin-right: 10px;
                    }



                    /deep/ .input-group {
                        width: 250px;
                        margin-right: 20px;

                    }

                }



            }
        }

        .table {
            margin-top: 15px;
            /deep/ td.column-header{
                background-color: #f1f1f1;
            }

        }

        .footer {
            text-align: center;
            margin-top: 20px;
        }
    }
</style>
