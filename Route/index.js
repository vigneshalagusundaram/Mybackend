const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { dbUrl } = require('../config/config')
const { UserDetails } = require('../schema/Userloginshema')

mongoose.connect(dbUrl)

router.get('/', async (req, res) => {
   
    try {
      
        let data = await UserDetails.find()
        if (data) {
            res.status(200).send({
                massage: "Data Fatch Successfully ",
                data
            })
        } else {
            res.status(400).send({
                massage: "Internal server error",
                
            })

        }
        
    } catch (error) {

        res.status(500).send({
            massage: "Internal server error ",

        })
    }
})

router.put('/:id', async (req, res) => {
   
    try {
    
        let data = await UserDetails.findByIdAndUpdate(req.params.id)
        if (data) {
            res.status(200).send({
                massage: "Data Updated Successfully ",
          
            })
        } else {
            res.status(400).send({
                massage: "Invalid User Id",
                data
            })

        }

    } catch (error) {

        res.status(500).send({
            massage: "Internal server error ",

        })
    } 
})

router.get('/:id', async (req, res) => {
    try {
        
        let data = await UserDetails.findById(req.params.id)
        if (data) {
            res.status(200).send({
                massage: "Data Save Successfully ",
                data
            })
        } else {
            res.status(400).send({
                massage: "Invalid User Id",
                data
            })

        }

    } catch (error) {

        res.status(500).send({
            massage: "Internal server error ",

        })
    } 
   
})

router.post('/', async (req, res) => {

    try {
        let data = await UserDetails.create(req.body)
        console.log(data)
        res.status(200).send({
            massage: "Data Save Successfully ",
           
        })
    } catch (error) {

        res.status(500).send({
            massage: "Internal server error ",
            error: error?.massage
        })
    }
})

module.exports = router