require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// module
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

const app = express()
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@todo-list.shof5.mongodb.net/todo-list?retryWrites=true&w=majority`)
    console.log("mongodb connected!!!")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
connectDB()
// read data in body in aplication/json
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)
const PORT = 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))