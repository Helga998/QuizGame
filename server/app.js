const express = require('express')
const app = express()
const port = 3000
const { Topic} = require('./db/models')

app.get('/api/topics', async (req, res) => {
    const topics = await Topic.findAll()
  res.status(200).json(topics)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})