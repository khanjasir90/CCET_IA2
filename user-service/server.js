const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config')

const corsOptions ={
    origin:'*',            
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


const newUserAPIRouter = require('./api/routes/addUserAPIRouter')
const getAllUserAPIRouter = require('./api/routes/getAllUserAPIRouter')
const updateUserAPIRouter = require('./api/routes/updateUserAPIRouter')
const deleteUserAPIRouter = require('./api/routes/deleteUserAPIRouter')

app.use('/api/user',newUserAPIRouter)
app.use('/api/user',getAllUserAPIRouter)
app.use('/api/user',updateUserAPIRouter)
app.use('/api/user',deleteUserAPIRouter)





app.listen(process.env.PORT,()=>console.log('Server running on port 3000'))




