import express from 'express'
import userController from '../controller/user.js'
const router = express.Router()

router.get('/', userController.getAllUser)
router.get('/:id', userController.getUserById)
router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.put('/:id',userController.editUser)
router.delete('/:id',userController.deleteUser)



export default router