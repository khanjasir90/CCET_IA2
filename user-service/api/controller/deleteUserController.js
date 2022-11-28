const mongoose = require('mongoose')
const User = require('../models/user.model')

exports.deleteUser = async(req,res) => {
    const {email_id} = req.body
    console.log(email_id)
    const userExist = await User.find({email_id:email_id}).count()
    if(userExist == 0) {
        res.status(400).send({status:400,message:"User not registerd"})
    }else{
        const isSuccess = await User.deleteOne({email_id:email_id})
        console.log(isSuccess)
        if(isSuccess) {
            res.status(200).send({status:200,message:'User Deleted'})
        }else{
            res.status(500).send({status:500,message:'Unable to Deleted'})
        }
    }
}