const path = require("path");

// configuration webpack will going to check
module.exports = {
    mode: "development", // or production
    entry: path.resolve(__dirname, 'src', 'app'), // is the first file of our app
    output: { // what our application is going to become 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    }, 
    resolve: {
        // these are the filetypes we want to webpack to process
        extensions: ['.js', '.jsx']
    },
    devServer: {
        // if we want to enable react router 
        historyApiFallback: true
    },
    // how we want our app to be compiled
    module: {
        // if you found any file ends with .js or .jsx, 
        // hey webpack, you should use babel-loader to compile the file
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            //test: /\.jsx?/,
            loader: 'babel-loader'
        }]
    }

    
}