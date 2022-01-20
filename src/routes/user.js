import express from 'express'

const router = express.Router()

import register from '../controllers/user/register.js'
router.post('/register', register)

// ---
router.get('/', (req, res) => {
  res.send('Node server is running on vercel?')
})
// ---

export default router
