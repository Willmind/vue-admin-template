<template>
    <div class="home-container">
        <div v-if=adminPermission>
            超级管理员
        </div>

        <div v-if=!adminPermission>
            普通
        </div>


    </div>
</template>

<script>
    import {mapState } from 'vuex'

    export default {
        name: 'home',
        computed:{
            ...mapState(
                {
                    userData: 'userData'
                }
            )
        },
        data() {
            return {
                adminPermission:'',
            }
        },
        methods: {},

        mounted() {
            console.log(this.userData['adminPermission']);
            if(this.userData['adminPermission']=='0'){
                this.adminPermission=false
            }else{
                this.adminPermission=true
            }



        }
    }
</script>

<style scoped>
    .home-container {
        padding: 10px;
        padding-top: 5px;
    }

    .home-content {
        padding: 10px;
        border-radius: 5px;
        background: #fff;
    }
</style>
