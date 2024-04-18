import { User } from './src/userRepository'
import  express from 'express'

const app = express()
app.use(express.json())
const port = 3000
const user = new User()


app.post('/user', async (req, res) => {
  const { name }  = req.body
  const data = await user.create(name)
  return res.status(201).send(data)
})

app.get('/user', async (req, res) => {
  const users = await user.get()
  return res.status(200).send(users)
})

app.put('/user/:id', async (req, res) => {
  const { id } = req.params
  const convertId = Number(id)
  const { name }  = req.body
  const data = await user.update({ 
    id: convertId, 
    name,
  })
  return res.status(204).send(data)
})

app.delete('/user/:id', async (req, res) => {
  const { id } = req.params
  const convertId = Number(id)
  const data = await user.delete(convertId)
  return res.status(200).send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
