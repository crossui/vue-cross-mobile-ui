'use strict'
const path = require('path')
const os = require('os')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}



module.exports = {
    context: path.resolve(__dirname, '../'),
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            /* {
                            test: /\.vue$/,
                            loader: 'vue-loader',
                            options: vueLoaderConfig
                        }, */
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            /*  {
                 test: /\.css$/,
                 use: ExtractTextPlugin.extract({
                     use: ['css-loader?minimize', 'autoprefixer-loader'],
                     fallback: 'style-loader'
                 })
             }, */
            {
                test: /\.less$/,
                include: [resolve('src')],
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
                    fallback: 'style-loader'
                }),
            },
            /* 
                        {
                            test: /\.js$/,
                            loader: 'babel-loader',
                            include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
                        }, */
            {
                test: /\.js$/,
                loader: 'happypack/loader?id=happybabel',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader',
                options: {
                    preventExtract: true,
                    preprocess: (MarkdownIt, source) => {
                        MarkdownIt.renderer.rules.table_open = function() {
                            return '<table class="api-table">'
                        }
                        MarkdownIt.renderer.rules.blockquote_open = function() {
                                return '<blockquote class="api-blockquote">'
                            }
                            // ```code`` 给这种样式加个class code_inline
                        const code_inline = MarkdownIt.renderer.rules.code_inline
                        MarkdownIt.renderer.rules.code_inline = function(...args) {
                                args[0][args[1]].attrJoin('class', 'code_inline')
                                return code_inline(...args)
                            }
                            // 对于代码块去除v-pre,添加高亮样式
                            //MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
                        return source
                    },
                    use: [
                        [require('markdown-it-container'), 'demo', {

                            validate: function(params) {
                                return params.trim().match(/^demo\s+(.*)$/);
                            },

                            render: function(tokens, idx) {
                                if (tokens[idx].nesting === 1) {
                                    // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                                    let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                                    let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : '';
                                    let descriptionHTML = description ? markdownRender.render(description, { html: true }) : '';
                                    // 2.获取代码块内的html和js代码
                                    let content = tokens[idx + 1].content;
                                    // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                                    return `<demo-block>
                                                        <div class="source" slot="source">${content}</div>
                                                        ${descriptionHTML}
                                                        <div class="highlight" slot="highlight">`;
                                } else {
                                    return '</div></demo-block>\n';
                                }
                            }
                        }]
                    ]

                }
            },
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    plugins: [
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            verbose: true
        })
    ]
}