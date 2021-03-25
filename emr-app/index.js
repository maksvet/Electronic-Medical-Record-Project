import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
