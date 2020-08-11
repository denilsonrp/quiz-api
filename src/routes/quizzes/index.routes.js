const express = require('express')

const quizRepository = require('./../../database/repositories/quiz.repository')

const quizRouter = express.Router()

/**
 * Return all quizzes
 */
quizRouter.get('/', (request, response) => {
  const quizzes = quizRepository.find()

  return response.json(quizzes)
})

/**
 * Return one quiz matched by id
 */
quizRouter.get('/:id', (request, response) => {
  const { id } = request.params

  const quiz = quizRepository.findOne({ id })

  return response.json(quiz)
})

/**
 * Create new quiz
 */
quizRouter.post('/', (request, response) => {
  const { title, user, questions } = request.body

  const quizzes = quizRepository.create({ title, user, questions })

  return response.json(quizzes)
})

module.exports = quizRouter
