import express from 'express'

const router = express.Router()

import register from '../controllers/user/register.js'
router.post('/register', register)

export default router
