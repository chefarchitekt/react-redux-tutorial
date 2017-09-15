import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/',
        filename: 'bundle.js'
        //if dont include filename, there will always error on dom syntax
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), //Using NoErrorsPlugin is deprecated.
        new webpack.optimize.OccurrenceOrderPlugin(), //ensure consistent built hashes
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: [ 'react-hot-loader', 'babel-loader' ]
                //new webpack API must include suffix -loader
                //react-hot-loader will teach react how to load itself
            },
            { 
                test: /\.(woff2?|jpe?g|png|gif|ico|svg)$/, 
                include: path.join(__dirname, 'client/images'),
                loaders:  [ 'file-loader' ]
                //use: 'file-loader?name=./client/images/[name].[ext]' 
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
        //new webpack API cannot allow empty ('') extensions
    }
}