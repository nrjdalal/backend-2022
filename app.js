// npm packages
import dotenv from 'dotenv'
import express from 'express'

// .env file
dotenv.config()
const { MONGODB, PORT } = process.env

// custom imports
import connect from './src/configs/mongodb.js'
import userRouter from './src/routes/user.js'

// initializing app
const app = express()

// middlewares
app.use(express.json())
app.set('json spaces', 2)

// routes
app.use('/users', userRouter)

// running app
app.listen(PORT, async () => {
  await connect(MONGODB)
  console.log(`App is running on port - ${PORT}`)
})
