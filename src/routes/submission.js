import express from 'express'
import UserGuard from '../middleware/UserGuard.js'
import AdminGuard from '../middleware/AdminGuard.js'
import submissionController from '../controller/submission.js'
const router = express.Router()

router.get('/',UserGuard, submissionController.getSubmission)
router.get('/:id',UserGuard, submissionController.getSubmissionById)
router.post('/',UserGuard, submissionController.createSubmission)
router.put('/:id',AdminGuard, submissionController.editSubmission)
router.delete('/:id',AdminGuard,submissionController.deleteSubmission)

export default router