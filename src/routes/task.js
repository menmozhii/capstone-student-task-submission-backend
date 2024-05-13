import express from 'express'
import taskController from '../controller/task.js'
import UserGuard from '../middleware/UserGuard.js'
import AdminGaurd from '../middleware/UserGuard.js'
const router = express.Router()

router.get('/', UserGuard,taskController.getAllTask)
router.get('/:id',UserGuard,  taskController.getTaskById)
router.post('/', AdminGaurd, taskController.createTask)
router.put('/:id',AdminGaurd,  taskController.editTask)
router.delete('/:id',AdminGaurd, taskController.deleteTask)



export default router