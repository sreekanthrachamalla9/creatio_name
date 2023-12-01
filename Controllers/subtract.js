const express = require('express')
const router = express.Router()

//Addi
router.get('/addi/:a/:b',(req, res)=>{
    try{
        let{a,b} = req.params
        let sum = parseInt(a) + parseInt(b)
        res.status(200).send({error : false, message : `sum of ${a}, ${b} is ${sum}`})
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
    }
 })

 //Sub
 router.get('/sub/:a/:b',(req, res)=>{
    try{
        let{a,b} = req.params
        let sub = parseInt(a) - parseInt(b)
        res.status(200).send({error : false, message : `Subtract of ${a}, ${b} is ${sub}`})
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
    }
 })

 //Multiplication
 router.get('/mul/:a/:b',(req, res)=>{
    try{
        let{a,b} = req.params
        let mul = parseInt(a) * parseInt(b)
        res.status(200).send({error : false, message : `Multiple of ${a}, ${b} is ${mul}`})
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
    }
 })

 //Divison

 router.get('/div/:a/:b',(req, res)=>{
    try{
        let{a,b} = req.params
        let div = parseInt(a) / parseInt(b)
        res.status(200).send({error : false, message : `Divison of ${a}, ${b} is ${div}`})
    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
    }
 })


module.exports = router