<template>
    <div class="login-vue">
        <div class="login-container">
            <div v-if="login">

                <div class="title-container">
                    <h3>系统登录</h3>
                </div>

                <div>
                    <Input prefix="ios-contact" v-model="account" placeholder="用户名" clearable/>

                    <Input type="password" v-model="password" prefix="md-lock" placeholder="密码" clearable/>


                </div>

                <div class="login-button">
                    <Button :loading="isShowLoading" type="primary" @click="submit">登陆</Button>

                </div>


            </div>

            <div v-if="registerData">

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'login',
        data() {
            return {
                adminPermission:'',

                registerData: false,
                login: true,

                account: 'admin',
                password: '123456',

                isShowLoading: false,
            }
        },
        watch: {
            $route: {
                handler(route) {
                    this.redirect = route.query && route.query.redirect
                },
                immediate: true,
            },
        },
        methods: {

            register() {
                this.login = false
                this.registerData = true

            },

            getUserData() {

            },
            submit() {
                axios.post("/users/getUserData", {
                    account: this.account,
                    password: this.password,
                }).then((response) => {
                    console.log(response);

                    if(response.data.status=='0'){
                        this.$message({
                            message: '无此用户名',
                            type: 'error'
                        });

                    }else if(response.data.status=='1'){

                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                        this.$nextTick(()=>{

                            this.isShowLoading = true

                            // this.adminPermission=response.data.
                            // 登陆成功 设置用户信息
                            localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
                            localStorage.setItem('userName', '小明')
                            localStorage.setItem('data','123')
                            // 登陆成功 假设这里是后台返回的 token
                            localStorage.setItem('token', 'i_am_token')
                            this.$router.push({path: this.redirect || '/'})
                        })




                    }else if(response.data.status=='2'){
                        this.$message({
                            message: '用户名或密码错误',
                            type: 'error'
                        });
                    }



                })





            },
        },
    }
</script>

<style lang="scss" scoped>

    .login-vue {
        min-height: 100%;
        width: 100%;
        background-color: #2d3a4b;
        overflow: hidden;
        text-align: -webkit-center;

        .login-container {

            .login-button {
                margin: 10px 10px 10px 10px;
            }

            .ivu-input-wrapper {
                display: inline-block;
                width: 250px;
                position: relative;
                vertical-align: middle;
                line-height: normal;
                margin: 5px 10px 10px 10px;

            }

            width: 420px;
            margin: 120px 20px 20px 20px;
            padding: 120px 20px 20px 20px;

            .title-container {
                margin: 10px;
                padding: 10px;
                color: white;
                font-size: 26px;
                font-weight: 700;


            }


        }

    }


    .login-vue .container {
        background: rgba(255, 255, 255, .5);
        width: 300px;
        text-align: center;
        border-radius: 10px;
        padding: 30px;
    }

    .login-vue .ivu-input {
        background-color: transparent;
        color: #fff;
        outline: #fff;
        border-color: #fff;
    }

    .login-vue ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: rgba(255, 255, 255, .8);
    }

    .login-vue :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: rgba(255, 255, 255, .8);
    }

    .login-vue ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: rgba(255, 255, 255, .8);
    }

    .login-vue :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgba(255, 255, 255, .8);
    }

    .login-vue .title {
        font-size: 16px;
        margin-bottom: 20px;
    }

    .login-vue .input-c {
        margin: auto;
        width: 200px;
    }

    .login-vue .error {
        color: red;
        text-align: left;
        margin: 5px auto;
        font-size: 12px;
        padding-left: 30px;
        height: 20px;
    }

    .login-vue .submit {
        width: 200px;
    }

    .login-vue .account {
        margin-top: 30px;
    }

    .login-vue .account span {
        cursor: pointer;
    }

    .login-vue .ivu-icon {
        color: #eee;
    }

    .login-vue .ivu-icon-ios-close-circle {
        color: #777;
    }
</style>
