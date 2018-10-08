import * as express from 'express'
import * as userRouter from './users'

const router = express.Router()

// Mount routes
router.use('/users', userRouter)

export = router
