const {Router} = require('express')
const { getUsers, postUser } = require('../controllers/users')
const router = Router()

router.get('/get-users', getUsers);

router.post('/post-user', postUser);

module.exports = router