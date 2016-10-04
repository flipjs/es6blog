'use strict'

var express = require('express')
var app = express()
var server = require('http').createServer(app)
var iso = require('../portable')

console.log(iso.validateId('USER_flipjs'))
app.use('/', express.static(__dirname + '/../dist', {maxAge: 1000000}))
server.listen(3000, () => console.log('App started...'))
