const express = require('express')

const routes = express.Router()

const quizRouter = require('./quizzes/index.routes')
const answerRouter = require('./answers/index.routes')

routes.use('/quizzes', quizRouter)
routes.use('/answers', answerRouter)

module.exports = routes
