const express = require('express')
const router = express.Router()
const {getAllUser} = require('../controller/getAllUserController')

router.get("/",getAllUser)

module.exports = router