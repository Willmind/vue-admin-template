<template>
    <div class="login-vue">
        <div class="login-container">
            <div v-if="login">

                <div class="title-container">
                    <h3>系统登录</h3>
                </div>

                <el-form>
                    <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
                        <el-input
                            ref="username"
                            placeholder="Username"
                            name="username"
                            type="text"
                            tabindex="1"
                            autocomplete="on"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="account"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input prefix-icon="el-icon-password" placeholder="请输入密码" v-model="pwd" show-password></el-input>
                    </el-form-item>

                </el-form>


            </div>

            <div v-if="registerData">

            </div>
        </div>

        <!--        <div class="container">-->
        <!--            <div v-if="login">-->
        <!--                <p class="title">WELCOME</p>-->
        <!--                <div class="input-c">-->
        <!--                    <Input prefix="ios-contact" v-model="account" placeholder="用户名" clearable />-->
        <!--                    <p class="error">{{accountError}}</p>-->
        <!--                </div>-->
        <!--                <div class="input-c">-->
        <!--                    <Input type="password" v-model="pwd" prefix="md-lock" placeholder="密码" clearable />-->
        <!--                    <p class="error">{{pwdError}}</p>-->
        <!--                </div>-->
        <!--                <Button :loading="isShowLoading" class="submit" type="primary" @click="submit">登陆</Button>-->
        <!--                <p class="account"><span @click="register">注册账号</span> | <span @click="forgetPwd">忘记密码</span></p>-->

        <!--            </div>-->


        <!--            <div v-if="registerData">-->
        <!--                <p class="title">WELCOME</p>-->
        <!--                <el-form>-->
        <!--                    <el-form-item label="用户名">-->
        <!--                        <el-input clearable placeholder="请输入用户名" v-model="registerAccount" ></el-input>-->
        <!--                    </el-form-item>-->


        <!--                </el-form>-->

        <!--                <el-input clearable></el-input>-->
        <!--                <el-input clearable></el-input>-->


        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                registerAccount: '',
                registerData: false,
                login: true,
                account: 'admin',
                pwd: '123456',
                accountError: '',
                pwdError: '',
                isShowLoading: false,
                bg: {},
            }
        },
        created() {
            this.bg.backgroundImage = 'url(' + require('../assets/imgs/honda.jpg') + ')'
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
            // verifyAccount() {
            //     if (this.account !== 'admin') {
            //         this.accountError = '账号为admin'
            //     } else {
            //         this.accountError = ''
            //     }
            // },
            // verifyPwd() {
            //     if (this.pwd !== 'admin') {
            //         this.pwdError = '密码为admin'
            //     } else {
            //         this.pwdError = ''
            //     }
            // },
            register() {
                this.login = false
                this.registerData = true

            },
            forgetPwd() {

            },
            submit() {
                if (this.account === 'admin' && this.pwd === '123456') {
                    this.isShowLoading = true
                    // 登陆成功 设置用户信息
                    localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
                    localStorage.setItem('userName', '小明')
                    // 登陆成功 假设这里是后台返回的 token
                    localStorage.setItem('token', 'i_am_token')
                    this.$router.push({path: this.redirect || '/'})
                } else {
                    if (this.account !== 'admin') {
                        this.accountError = '账号为admin'
                    }

                    if (this.pwd !== 'admin') {
                        this.pwdError = '密码为admin'
                    }
                }
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
