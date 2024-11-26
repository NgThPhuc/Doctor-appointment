import express from 'express'
import { getAllReviews, creatReview } from '../Controllers/reviewController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(getAllReviews).post(authenticate,restrict(['patient']), creatReview)

export default router
