const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const userModel = require('./Models/User')
app.use(express.json())
app.use(cors())
const url = `mongodb+srv://KJKR:kavin2004@cluster0.hznuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const PORT =    process.env.PORT || 2004;
mongoose.connect(url)

app.get('/:username', async (req,res)=>{
    try{
        const result = await userModel.find({userName:req.params.username})
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
})


app.get('/', async (req,res)=>{
    try{
        const result = await userModel.find({})
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
})



app.post('/adduser',async (req,res)=>{
    const userName = req.body.userName
    const password = req.body.password
    const cities = req.body.cities
    const newUser = new userModel({userName:userName,password:password,cities:cities})
    try{
        await newUser.save()
        res.send("User Saved")
    }
    catch(err){
        console.log(err)
    }
})

app.post('/deletecity',async (req,res)=>{
    const user = req.body.userName
    const city = req.body.city
    console.log(city)

    try{
        const response = await userModel.findOne({userName:user})
        response.cities = response.cities.filter(item => item!==city)
        await response.save()
        res.send("city saved")
    }catch(err){
        console.log(err)
    }
})

app.put('/updatecities', async(req,res)=>{
    const newCity = req.body.city
    const user = req.body.username
    try{
        const User = await userModel.findOne({userName:user})
        const tempCities = User.cities
            tempCities.unshift(newCity)
            if(tempCities.length> 5) tempCities.pop()
        User.cities = tempCities;
        await User.save()
        console.log(User.cities)
        await User.save()
    }catch(err){
        console.log(err)
    }
})

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})


