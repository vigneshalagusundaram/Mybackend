const express = require('express')
const router = express.Router()
const { mongodb, dbName, dbUrl } = require('../config/config')

const { MongoClient } = require('mongodb');
const client = new MongoClient(dbUrl)


router.get('/', async (req, res) => {
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').find().toArray()

       
        res.status(200).send({
            massage: "Data Fatch Successfully ",
            data
        })
    } catch (error) {

        res.status(500).send({
            massage: "Internal server error ",

        })
    } finally {
        client.close()
    }
})

router.get('/:id', async (req, res) => {
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').findOne({ _id:new mongodb.ObjectId(req.params.id)})
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
    } finally {
        client.close()
    }
})


router.delete('/:id', async (req, res) => {
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').deleteOne({ _id:new mongodb.ObjectId(req.params.id)})
        if (data) {
            res.status(200).send({
                massage: "Deleted Successfully ",
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
    } finally {
        client.close()
    }
})


router.put('/:id', async (req, res) => {
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').updateOne({ _id:new mongodb.ObjectId(req.params.id)},{$set:req.body})
        if (data) {
            res.status(200).send({
                massage: "Data Updated Successfully ",
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
    } finally {
        client.close()
    }
})


router.post('/', async (req, res) => {
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').insertOne(req.body)
        console.log(data)
        res.status(200).send({
            massage: "Data Save Successfully ",
            data
        })
    } catch (error) {

        res.status(500).send({
            massage: "Internal server error ",

        })
    } finally {
        client.close()
    }
})
module.exports = router