const {Router} = require('express')
const { getUsers } = require('../controllers/users')
const router = Router()

router.get('/get-users', getUsers)

module.exports = router