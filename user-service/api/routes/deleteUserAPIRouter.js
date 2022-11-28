const express = require('express')
const router = express.Router()
const { deleteUser } = require('../controller/deleteUserController')

router.delete('/',deleteUser)

module.exports = router
