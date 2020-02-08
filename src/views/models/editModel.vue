<template>
    <div class="editModel">

        <div v-if="title != ''" class="title">
            <span class="name">{{title}}</span>
        </div>

        <slot v-else name="title">

        </slot>

        <div>
            <slot name="write_explain">

            </slot>
        </div>

        <div class="main">
            <slot name="main">

            </slot>
        </div>





    </div>

</template>

<script>
    export default {
        name: "editModel",
        props: {
            title: {
                type: String,
                default: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .editModel{
        position: relative;
        min-width: 850px;
        padding: 15px 35px 60px 35px;
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
            margin-right: 200px;
            color: #455563;
            text-decoration: underline;
            cursor: pointer;
            float: right;
            .explain_content {
                margin-top: 70px;
                display: none;
                position: absolute;
                z-index: 1;
                top: 0px;
                right: 73px;
                width: 345px;
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

        .main{

        }


    }

</style>
