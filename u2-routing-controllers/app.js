const express = require('express')
const { urlencoded, json } = require('body-parser')
const { logger } = require('./_services/logger')
const {
  getUserByQuery,
  getUserByPath,
  getUserByForm,
  search
} = require('./features/userController')
const { index } = require('./features/indexController')
const { getProductByQuery } = require('./features/productController')
const { getRgbByQuery } = require('./features/rgbControllers')
const { convertTemp } = require('./features/tempController')
const { getEcho, postEcho } = require('./features/echoController')

const app = express()

// Middlewares
app.use(urlencoded({ extended: false }))
app.use(json())
app.use(logger)

// Routes
app.get('/', index)

app.get('/users', getUserByQuery)
app.get('/users/search', search)
app.get('/users/:username', getUserByPath)
app.post('/users', getUserByForm)

app.get('/products/search', getProductByQuery)
app.get('/rgb', getRgbByQuery)
app.get('/:unit1-to-:unit2/:temp1', convertTemp)
app.get('/echo', getEcho)
app.post('/echo', postEcho)

const PORT = 3000
app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`))
