<template>
    <div class="login-vue">
        <div class="login-container">

            <div v-if="login">
                <div class="title-container">
                    <h3>系统登录</h3>
                </div>
                <div>
                    <Input prefix="ios-contact" v-model="account" placeholder="请输入用户名" clearable/>
                    <Input type="password" password  v-model="password" prefix="md-lock" placeholder="请输入密码" />
                </div>
                <div class="login-button">
                    <Button :loading="isShowLoading" type="primary" @click="submit">登陆</Button>
                    <Button :loading="isShowLoading2"   @click="register">注册</Button>
                </div>
            </div>

            <div v-if="registerData">
                <div class="title-container">
                    <h3>用户注册</h3>
                </div>
                <div>
                    <Input type="text" prefix="ios-contact" v-model="registerAccount" placeholder="请输入用户名" clearable/>
                    <Input type="text"  style="position: fixed;bottom: -9999px"/>
                </div>
                <div>
                    <Input type="password" style="position: fixed;bottom: -9999px"/>
                    <Input type="password" password  v-model="registerPassword" prefix="md-lock" placeholder="请设置密码"/>
                </div>

                <div>
                    <Input type="password" style="position: fixed;bottom: -9999px"/>
                    <Input type="password" password  v-model="registerPassword2" prefix="md-lock" placeholder="请确认密码" />
                </div>
                <div class="login-button">
                    <Button type="primary" @click="back">返回</Button>
                    <Button :loading="isShowLoading3" @click="registerForm">确定</Button>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import axios from 'axios'

    export default {
        name: 'login',
        inject: ['reload'],
        data() {
            return {
                registerAccount:'',
                registerPassword:'',
                registerPassword2:'',

                userData:'',
                adminPermission:'',

                registerData: false,
                login: true,

                account: 'admin',
                password: '123456',

                isShowLoading: false,
                isShowLoading2:false,
                isShowLoading3:false,
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
            back(){
                this.login = true
                this.registerData = false
            },
            refresh(){
                console.log(1);
                this.reload()
            },

            register() {
                this.isShowLoading2=true
                let _this = this;
                setTimeout(function (){
                    _this.login = false
                    _this.registerData = true
                    _this.isShowLoading2=false
                },50);


            },
            registerForm(){
                if(this.registerPassword!==''&&this.registerPassword2!==''&&this.registerAccount!==''){
                    if(this.registerPassword==this.registerPassword2){
                        this.isShowLoading3=true
                        axios.post("/users/addUser", {
                            registerAccount: this.registerAccount,
                            registerPassword: this.registerPassword,
                        }).then((response) =>{
                            if(response.data.status=='2'){
                                this.$message({
                                    message: '注册成功',
                                    type: 'success'
                                });
                            } else if(response.data.status=='1'){
                                this.$Message.error('注册失败！');

                            }else if(response.data.status=='0'){
                                this.$Message.error('用户名已存在！');

                            }


                            this.isShowLoading3=false
                        })
                    }else{
                        this.$Message.error('密码不一致！');
                        return false
                    }
                }else{
                    this.$Message.error('请输入用户名和密码！');
                    return false
                }



                // let _this = this;
                // setTimeout(function (){
                //
                //
                //     _this.isShowLoading3=false
                // },50);

            },

            getUserData() {

            },
            submit() {
                console.log(123);

                if(this.account!==''&&this.password!==''){
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
                            let userData=response.data.result
                            // console.log(userData);
                            // this.userData = JSON.parse(JSON.stringify(userData))
                            // console.log(this.userData);
                            this.$message({
                                message: '登录成功',
                                type: 'success'
                            });
                            this.$nextTick(()=>{
                                this.$i18n.locale='zh-CN'
                                this.$store.state.menuItems[0].text='主页'
                                this.$store.state.menuItems[1].text='疫情地图'
                                this.$store.state.menuItems[2].text='各地区病例'
                                this.$store.state.menuItems[3].text='实时播报'
                                this.$store.state.menuItems[4].text='迁徙数据'
                                console.log(1);


                                this.isShowLoading = true
                                this.$store.commit('updateUserData',userData)
                                console.log(this.$store.state.userData);
                                // 登陆成功 设置用户信息
                                localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
                                // 登陆成功 假设这里是后台返回的 token
                                localStorage.setItem('token', 'i_am_token')
                                console.log(123);
                                this.$router.push({path: this.redirect || '/'})
                            })




                        }else if(response.data.status=='2'){
                            this.$message({
                                message: '用户名或密码错误',
                                type: 'error'
                            });
                        }



                    })
                }else{
                    this.$Message.error('请输入用户名和密码！');
                    return false
                }






            },
        },
        mounted() {

        }
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

                .ivu-btn{
                    margin: 0px 10px 0 10px;
                }
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



</style>
