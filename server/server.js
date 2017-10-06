const express = require('express')
const bodyParser = require('body-parser')
const expressGraphql = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

// app.use(bodyParser.json())
app.use('/graphql', expressGraphql({
    schema,
    graphiql: true
}))

const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')

app.use(webpackMiddleware(webpack(webpackConfig)))

module.exports = app