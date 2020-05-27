const path = require('path');
const HyperDown = require('hyperdown');
const parser = new HyperDown;

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = "WinkeyUi";

const port = "8079";
const production = process.env.NODE_ENV === 'production';
const api = "https://mobil.winkeytech.com/api"; // 后端接口路径

module.exports = {
  // 配置开发服务器
  devServer: {
    port,
    https: false,
    open: false,
    overlay: {
      warnings: false,
      errors: false
    },
    // 本地代理
    proxy: {
      '/api': {
        target: api, // 后端接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    //after: require('./mock/mock-server.js')
  },
  configureWebpack(config) {
    // 自定义系统标题
    config.name = name
    config.resolve.alias['@'] = resolve('src') // 修改路径

    // 添加打包或编译时的版本号
    const Version = new Date().getTime() // 添加版本号
    config.output.filename = `[name].${Version}.js`
    config.output.chunkFilename = `[name].${Version}.js`

    if (production) {
      config.output.devtoolModuleFilenameTemplate = info => {
        const resPath = info.resourcePath
        if ((/\.vue$/.test(resPath) && !/type=script/.test(info.identifier)) || /node_modules/.test(resPath)) {
          return `webpack:///${resPath}?${info.hash}`
        } else {
          return `webpack:///${resPath.replace('./src','my-code/src')}`
        }
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolid: 'icon-[name]'
      })
      .end()
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        preset: 'default',
        breaks: true,
        raw: true,
        typographer: true,
        highlight: function(code, lang) {
          console.log(code)
          console.log(lang)
        },
        preprocess: function(markdownIt, source) {
          //console.log(markdownIt)
          return parser.makeHtml(source);
        }
      })
  },
  productionSourceMap: false
}