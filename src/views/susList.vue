<template>
    <div class="main">
       <div class="main-box">
           <el-card class="box-card">
               <el-carousel  :interval="0" type="card" height="520px" indicator-position="none">
                   <el-carousel-item v-for="item in susListTotal" >
                       <div class="square">

                           <div style="position:absolute;z-index:3;left:23px;top:267px">

                               <div class="text">{{item.mainSummary}}</div>
                               <div class="body">{{item.body}}</div>
                           </div>

                           <div style="position:absolute;z-index:3;left:23px;top:140px">

                               <div class="title">{{item.title}}</div>
                           </div>


                           <div style="position:absolute;z-index:1;width:650px;height:250px;background-color: #2834b9;">

                           </div>
                           <div style="position:absolute;z-index:3;right:10px;top:10px">
                               <img class="img-set" src="../assets/imgs/yaoyan.png">
                           </div>

<!--                           <div style="position:absolute;z-index:3;left:-2px;top:-2px">-->
<!--                               <img style="width: 100px;height: 100px" src="../assets/imgs/jiao.png">-->
<!--                           </div>-->

                           <div style="position:absolute;z-index:3;left:23px;top:70px">
                               <img style="width: 100px;height: 50px"  src="../assets/imgs/yaoyan2.png">
                           </div>

                           <div style="position:absolute;z-index:2;right:0px;top:150px">
                               <img style="width: 150px;height: 100px" src="../assets/imgs/fei.png">
                           </div>

                           <div style="position:absolute;z-index:2;left:0px;top:169px">
                               <img style="width: 150px;height: 80px" src="../assets/imgs/2.png">

                           </div>

                           <div style="position:absolute;z-index:2;left:10px;top:40px">
                               <img style="width:80px;height: 50px" src="../assets/imgs/douhao.png">

                           </div>



                       </div>



                   </el-carousel-item>

               </el-carousel>



           </el-card>
       </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "susList",
        data(){
            return{
                susListTotal:[],
            }
        },
        methods:{

        },
        mounted() {
            axios.get('getSusListTotal').then((res)=>{

                this.susListTotal=res.data

                for(var i=0;i<this.susListTotal.length;i++){
                    this.susListTotal[i].num=i+1
                }
                console.log(this.susListTotal);
            })
        }

    }
</script>

<style lang="scss" scoped>

    .body{
        margin-top: 10px;
        color: #666;
        font-weight: 400;
        font-size: 17px;
        width: 600px;
    }

    .text{
        font-size: 25px;
        font-weight: bold;
        color: #333;
        width: 600px;
    }


    .title{
        font-size: 30px;
        font-weight: bold;
        color: white;
        width: 362px;
    }


    .img-set{
        width: 200px;
        height: 200px;
        margin: 10px;
    }
    .square{
        margin: 0 auto;
        width: 650px;
        height: 510px;
        position: relative;
        top: 50%; /*偏移*/
        transform: translateY(-50%);

        border-radius: 16px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, .1);
        background-color: white;
    }

    .main-box{
        margin: 30px;
    }
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box-card{
        width: 1400px;
        height: 565px;

    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        /*background-color: #99a9bf;*/
    }

    .el-carousel__item:nth-child(2n+1) {
        /*background-color: #d3dce6;*/
    }

</style>
