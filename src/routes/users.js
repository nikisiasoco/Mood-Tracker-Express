const {Router} = require('express')
const { getUsers, postUser, getUserId } = require('../controllers/users')
const router = Router()

router.get('/get-users', getUsers);

router.post('/post-user', postUser);

router.get('/get-users/:id', getUserId);

module.exports = router