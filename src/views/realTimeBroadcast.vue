<template>
    <div class="main-card">
        <el-card style="width:600px;margin-top: 20px" class="box-card">
            <el-timeline>
                <el-timeline-item v-for="(item, index) in News" color='#409EFF' :timestamp="item.mtime" placement="top">
                    <el-card>
                        <h3 class="card-title">{{item.title}}</h3>
                        <div style="display: flex;justify-content: center">
                            <el-image :src="item.imgsrc"  lazy></el-image>
                        </div>
                        <p class="card-detail">{{item.digest}}</p>
                        <p class="detail" @mouseover="changeColor(item)"
                           :class="{to_active:shows==item.title}"
                           @click="getDetail(item)"
                           @mouseleave="changeColor(!item)">{{$t('m.detail')}}>></p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>

        </el-card>

    </div>




</template>

<script>
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default {
        name: "realTimeBroadcast",
        computed: {
            ...mapState(
                {
                    News: 'News'
                }
            )
        },
        data(){
            return{
                loading: false,
                shows:'',

            }
        },
        methods:{
            getDetail(data){
                console.log(data);
                window.open(data.url)
            },
            load () {
                this.loading = true
                setTimeout(() => {
                    this.count += 2
                    this.loading = false
                }, 2000)
            },
            changeColor(data) {
                this.shows = data.title;
            },

        },
        mounted() {
            axios.get('getNewsList').then((res)=>{
                console.log(res.data.items);
                this.$store.commit('updateNews',res.data.items)
            })
            console.log(this.News);

        }

    }
</script>

<style lang="scss" scoped>
    .card-title{
        margin-bottom: 10px;
    }
    .card-detail{
        margin-top: 10px;
    }
    .main-card{
        display: flex;
        justify-content: center;

    }
    .detail{
        margin-top: 5px;
        color: #666666;
        cursor: pointer;
    }
    .to_active {
        color: rgb(64, 158, 255) !important;
    }

</style>
