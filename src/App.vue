<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="isRouterAlive"></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App',
        provide() {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                isRouterAlive: true
            }
        },
        methods: {
            reload() {

                this.isRouterAlive = false
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            }
        }

    }
</script>

<style>

    body .el-table th.gutter {
        display: table-cell !important;
    }

    .el-table td,.el-table th{
        text-align: center!important;
    }






    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    li, ul, p, div, body, html, table {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        overflow: hidden;
    }

    li {
        list-style: none;
    }

    #app {
        height: 100%;
    }
</style>
