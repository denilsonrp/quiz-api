const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require("path")

const file = path.resolve(__dirname, '..', 'answers.json')

const create = ({ quizId, user, coordinates, newAnswers }) => {
  const answer = {
    id: uuidv4(),
    quizId,
    date: new Date().toISOString(),
    user,
    coordinates,
    answers: newAnswers
  }

  let answers = fs.readFileSync(file)
  answers = JSON.parse(answers)

  answers.push(answer)

  fs.writeFileSync(file, JSON.stringify(answers))

  return answers
}

const findByQuizId = ({ id }) => {
  let answers = fs.readFileSync(file)

  answers = JSON.parse(answers)

  const allAnswers = answers.filter(answer => answer.quizId === id)

  return allAnswers
}

module.exports = {
  create,
  findByQuizId
}
