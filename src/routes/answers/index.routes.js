const express = require('express')

const answerRepository = require('./../../database/repositories/answer.repository')

const answerRouter = express.Router()

/**
 * Return answers for quiz matched by id
 */
answerRouter.get('/:id', (request, response) => {
  const { id } = request.params

  const answers = answerRepository.findByQuizId({ id })

  return response.json(answers)
})

/**
 * Create new answer
 */
answerRouter.post('/', (request, response) => {
  const { quizId, user, coordinates, answers: newAnswers } = request.body

  const answers = answerRepository.create({ quizId, user, coordinates, newAnswers })

  return response.json(answers)
})

module.exports = answerRouter
