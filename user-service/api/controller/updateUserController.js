const mongoose = require('mongoose')
const User = require('../models/user.model')


exports.updateUser = async(req,res) => {
    const {firstname,lastname,email_id,phone_no} = req.body
    const userExist = await User.find({email_id:email_id}).count()
    console.log(userExist)
    if(userExist == 0) {
        res.status(400).send({status:400,message:"User Not Registered"})
    }else{
        const isSuccess = await User.updateOne({email_id:email_id},{
            $set: {
                firstName: firstname,
                lastName: lastname,
                email_id: email_id,
                phone_no: phone_no
            }
        })
        if(isSuccess) {
            res.status(200).send({status:200,message:"Successfully Updated"})
        }else{
            res.status(500).send({status:500,message:"There was some error in Updating"})
        }
    }
}