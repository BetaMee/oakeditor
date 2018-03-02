const webpack = require('webpack');
const path = require('path');

// 目录配置
const sourceDirectory = path.resolve(__dirname, 'src');
const targetDirectory = path.resolve(__dirname, 'dist');

const config = {
  // 入口
  entry: {
    mian: sourceDirectory, // 业务源码
    vendor: '' // 外部代码单独抽离出来打包
  },
  // 输出
  output: {
    path: targetDirectory, // 打包后的文件存放的地方
    publicPath: '/dist/', // 静态资源文件内的请求路径指向静态资源服务器
    filename: '[name].dev.js' // 打包后输出文件的文件名
  },
  // 解析
  resolve: {
    extensions: ['.js', '.jsx'], // 直解析对应的文件类型
  },
  // 开启调试工具
  devtool: 'inline-source-map',
  // webpack-dev-server 服务配置
  devServer: {
    contentBase: sourceDirectory,  // 本地服务器所加载的页面所在的目录
    port: 8080, // 端口
    open: true, // 自动打开浏览器
    colors: true,  // 终端中输出结果为彩色`
    // historyApiFallback: true,  // 不跳转
    inline: true,
    hot: true // Hot module replacement
  },
  // loader规则配置，按需使用
  module: {
    rules: [
        // babel-loader
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, '/src/'), // 仅处理源码部分
            use: [{
                loader: 'babel-loader?cacheDirectory', // 开启缓存，提高编译速度
                options: {
                    plugins: ["react-hot-loader/babel"] // 针对dev模式使用react-hot-loader
                }
            }]
        },
        // css
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: true, // 开启CSS Module
                  localIdentName: '[name]__[local]-[hash:base64:5]',
                },
              },
              'postcss-loader'
            ],
        },
        // image
        {
            test: /\.(png|jpg|svg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }
    ]
  },
  // 插件
  plugins: [
    // 启用热替换
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 配置环境
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
    }),
  ]
};

module.exports = config;
