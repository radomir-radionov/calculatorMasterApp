import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = process.env.PORT || 3030
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port)
