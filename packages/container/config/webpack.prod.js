const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

console.log(process.env.MARKETING_DOMAIN);

const domain = process.env.MARKETING_DOMAIN;

const prodConfig = {
    mode: 'production',
    output : {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge( commonConfig, prodConfig );