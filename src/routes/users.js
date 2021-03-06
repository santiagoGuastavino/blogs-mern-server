import express from 'express'
import {
  getAll,
  signUp,
  login
} from '../controllers/usersController.js'

const router = express.Router()

router.get('/', getAll)
router.post('/', signUp)
router.post('/login', login)

export default router
