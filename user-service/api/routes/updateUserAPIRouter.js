const express = require('express')
const router = express.Router()
const { updateUser } = require('../controller/updateUserController')

router.put('/',updateUser)

module.exports = router