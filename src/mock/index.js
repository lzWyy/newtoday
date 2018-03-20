const express = require('express')
const app = new express()

const remcommend = require('./recommend')

app.get('/list', function (req, res) {
  res.send(remcommend)
})

app.listen('3000', function () {
  console.log('this server listen in port 3000!')
})