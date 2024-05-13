 import express from 'express'
import userRoutes from './user.js'
import taskRoutes from './task.js'
import submissionRoutes from './submission.js'

 const router = express.Router()

router.use('/user',userRoutes)
router.use('/task',taskRoutes)
router.use('/submission',submissionRoutes)

 export  default router
