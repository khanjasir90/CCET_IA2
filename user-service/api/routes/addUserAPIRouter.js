const express = require('express')
const router = express.Router()
const { createNewUser } = require('../controller/addUserController')


router.post("/",createNewUser)


module.exports = router