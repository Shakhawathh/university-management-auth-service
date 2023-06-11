import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Routes
app.use('/api/v1/users/', usersRouter)

//Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'problem')
// })

//global error handler

app.use(globalErrorHandler)

export default app
