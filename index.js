const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./lib/routes')
const moves = require('./lib/moves')
const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())

app.get('/', routes.handleIndex)
app.post('/start', routes.handleGameData)
app.post('/move', routes.handleMove)
app.post('/end', routes.handleGameData)

app.listen(PORT, () => console.log(`Battlesnake Server listening at http://127.0.0.1:${PORT}`))
