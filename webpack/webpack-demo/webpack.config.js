const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: './app/index.js',  // entry file
    output: {
        path: path.resolve(__dirname, 'build'), // must with absolute path, when output file
        filename: "bundel.js", // output file name
        publicPath:'build/' // figure out how to find source
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                // use: ['style-loader',
                //     {
                //         loader:'css-loader',
                //         options: {
                //             modules:true
                //         }
                //     }
                // ]

                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: { 
                            modules: true
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].[hash].css")
    ]
}