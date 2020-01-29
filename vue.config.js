module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/users/*': {
                target: 'http://localhost:3000', // 对应自己的接口
                changeOrigin: true,
                ws: true,
            },
        },
    },
}
