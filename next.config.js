const webpack = require('webpack')

process.env.GOOGLE_APPLICATION_CREDENTIALS = './serviceAccount.json'
module.exports = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    return config
  }
}
