const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

const { Topic, Question} = require('./db/models')


app.get('/api/topics', async (req, res) => {
    const topics = await Topic.findAll()
  res.status(200).json(topics)
})

app.get('/api/question/:id', async (req, res) => {
  const {id} = req.params;
  console.log(id)
  const question = await Question.findByPk(+id);
  console.log(question, 11111111111)
res.status(200).json(question)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})