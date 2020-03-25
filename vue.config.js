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
        proxy: {
            '/users/*': {
                target: 'http://localhost:3000', // 对应自己的接口
                changeOrigin: true,
                ws: true,
            },
            // "/api":{
            //     target: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/api': '/'
            //     }
            // }

        },
    },
}
