const mongoose = require('mongoose')
const User = require('../models/user.model')


exports.getAllUser = async (req,res,next) => {
    const usersData = await User.find({});
    res.status(200).send({status:200,message:usersData})
} 