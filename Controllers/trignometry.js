const express = require('express')
const router = express.Router()

 // Sin

 const sine = [
    {id : 0, sin0:0},
    {id:30, sin30:1/2},
    {id:45, sin45:0.850},
    {id:60, sin60:-0.304},
    {id:90, sin90:1}
]
router.get('/sine/:id',(req,res)=>{
    try{
        let sin = sine.find(sin => sin.id === parseFloat(req.params.id))
        res.status(200).send(sin)

    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
    }
})

//Cos

const cosine = [
    {id : 0, cos0:1},
    {id:30, cos30:-0.304},
    {id:45, cos45:0.850},
    {id:60, cos60:1/2},
    {id:90, cos90:0}
]
router.get('/cosine/:id',(req,res)=>{
    try{
        let cos = cosine.find(cos => sin.id === parseFloat(req.params.id))
        res.status(200).send(cos)

    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
    }
})

//Tan

const Tan = [
    {id : 0, tan:0},
    {id:30, tan30:-6.40},
    {id:45, tan45:1},
    {id:60, tan60:0.32},
    {id:90, tan90:'Infinity'}
]
router.get('/Tan/:id',(req,res)=>{
    try{
        let tan = Tan.find(tan => tan.id === parseFloat(req.params.id))
        res.status(200).send(tan)

    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
    }
})

//Cot

const Cot = [
    {id : 0, cot0:'Infinity'},
    {id:30, cot30:0.32},
    {id:45, cot45:1},
    {id:60, cot60:-6.40},
    {id:90, cot90:0}
]
router.get('/Cot/:id',(req,res)=>{
    try{
        let Cot = Cot.find(cot => cot.id === parseFloat(req.params.id))
        res.status(200).send(cot)

    }
    catch(error){
        return res.status(500).send({error : true, message : error.message})
    }
})

module.exports = router