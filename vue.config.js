// const express=require('express')
// var axios=require('axios')
// app.get('/api/getData',function (req,res) {
//     const url='https://interface.sina.cn/news/wap/fymap2020_data.d.json';
//     axios.get(url,{
//         headers:{
//             referer:'https://interface.sina.cn',
//             host:'interface.sina.cn'
//         },
//         params:req.query
//     }).then((response)=>{
//         res.json(response.data);
//     })
// })


module.exports = {
    lintOnSave: false,
    devServer: {
        before (app) {
            var axios=require('axios')
            // 可通过代理名称在js中使用代理
            app.get('/getListTotal', function (req, res) {
                var url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total'
                axios.get(url, {
                    headers: {
                        // 设置代理服务器和代理域名
                        referer: 'https://c.m.163.com',
                        host: 'c.m.163.com'
                    },
                    // 需要注意，请求参数为req.quey而不是req
                    // 请求参数由使用该代理的js方法传入
                    params: req.query
                }).then((response) => {
                    // js方法请求ajax数据后，通过后端代理对数据进行json解析，再返回数据到方法中
                    res.json(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            })
        },

        proxy: {
            '/users/*': {
                target: 'http://localhost:3000', // 对应自己的接口
                changeOrigin: true,
                ws: true,
            },
        },
    },
}
