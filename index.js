
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRoutes.js'
import { databaseConnetion } from './db/db.js'
const app = express()
const port = 3000
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// parse application/json
app.use(bodyParser.json())

databaseConnetion()
app.use("/user/api/v1",userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})