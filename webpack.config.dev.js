import path from 'path';

export default {
    devtools: 'eval-source-map',
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: '/',
        filename: 'bundle.js'
        //if dont include filename, there will always error on dom syntax
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: [ 'babel-loader' ]
                //new webpack API must include suffix -loader
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
        //new webpack API cannot allow empty ('') extensions
    }
}