const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/des/:name/:id', (req, res) => {
  res.send('the describation!'+ req.params.name + req.params.id)
})
app.get('*', (req, res) => {
  res.send('not found' + Date.now())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})