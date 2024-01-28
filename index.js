import 'dotenv/config'
import expres from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import router from './routes/userRouters.js'
import { connectdb } from './db/db.js'
const app = expres()
const port = process.env.PORT

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
//using database
connectdb()

//using router
app.use(router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})