module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 75, // 以设计稿750为例， 750 / 10 = 75
            propList: ["*"],
            selectorBlackList: ["van"], // 使用 van 组件，屏蔽带有 van 的类名
          }),
        ],
      },
    },
  },
  devServer: {
    port: 7788,
  },
};
