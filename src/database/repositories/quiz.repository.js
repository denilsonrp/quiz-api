const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require("path")

const file = path.resolve(__dirname, '..', 'quizzes.json')

const create = ({ title, user, questions }) => {
  const quiz = {
    id: uuidv4(),
    date: new Date().toISOString(),
    title,
    user,
    questions
  }

  let quizzes = fs.readFileSync(file)
  quizzes = JSON.parse(quizzes)

  quizzes.push(quiz)

  fs.writeFileSync(file, JSON.stringify(quizzes))

  return quizzes
}

const find = () => {
  const quizzes = fs.readFileSync(file)

  return JSON.parse(quizzes)
}

const findOne = ({ id }) => {
  let quizzes = fs.readFileSync(file)

  quizzes = JSON.parse(quizzes)

  const [ quiz ] = quizzes.filter(quiz => quiz.id == id)

  return quiz
}

module.exports = {
  create,
  find,
  findOne
}
