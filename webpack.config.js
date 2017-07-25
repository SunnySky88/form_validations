var config = {
    entry: './form.jsx',
    output: {
        path: __dirname,
        filename: 'index.js',
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;

