const mongoose = require('mongoose')
const User = require('../models/user.model')


exports.createNewUser = async (req,res,next) => {
    try{
        console.log('hello')
        let {firstname,lastname,email_id,phone_no} = req.body
        const userExist = await User.findOne({email_id:email_id})
        if(userExist) {
            res.status(400).send({status:400,message:"User Already Exist!!!"})
        }else{
            const newUser = new User({
                firstName: firstname,
                lastName: lastname,
                email_id: email_id,
                phone_no: phone_no
            })
            const user = await newUser.save()
            res.status(200).send({status:200,message:"User created Successfully"})
        }
    }catch(error) {
        next(error)
    }
} 