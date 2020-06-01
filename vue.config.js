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
            app.get('/getSusListTotal', function (req, res) {
                var url = 'https://file1.dxycdn.com/2020/0130/454/3393874921745912507-115.json?t=26458676'
                axios.get(url, {
                    headers: {
                        // 设置代理服务器和代理域名
                        referer: 'https://file1.dxycdn.com',
                        host: 'file1.dxycdn.com'
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

            app.get('/getNewsList', function (req, res) {
                var url = 'https://gw.m.163.com/nc/api/v1/feed/static/h5-normal-list?start=0&size=100&tid=T1582287839597&t=317111417022'
                axios.get(url, {
                    headers: {
                        // 设置代理服务器和代理域名
                        referer: 'https://gw.m.163.com',
                        host: 'gw.m.163.com'
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

            app.get('/getMoveList', function (req, res) {
                var url = 'https://huiyan.baidu.com/openapi/v1/migration/rank?type=move&ak=kgD2HiDnLdUhwzd3CLuG5AWNfX3fhLYe&adminType=country&name=%E5%85%A8%E5%9B%BD'
                axios.get(url, {
                    headers: {
                        // 设置代理服务器和代理域名
                        referer: 'https://huiyan.baidu.com',
                        host: 'huiyan.baidu.com'
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

            app.get('/getReportList', function (req, res) {
                var url = 'https://ent.163.com/special/00035080/virus_report_data.js?_=1586961164931&callback=callback'
                axios.get(url, {
                    headers: {
                        // 设置代理服务器和代理域名
                        referer: 'https://ent.163.com',
                        host: 'ent.163.com'
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
                target: 'http://localhost:3000', // 对应自己访问的服务器域名
                changeOrigin: true, //允许跨域
                ws: true,
            },
        },
    },
}
