// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//HTTP METHODS
app.get('/v1/explorers',(req,res)=>{
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1={id: 1,name:'Felipe1'}
    const explorer2={id: 2,name:'Felipe2'}
    const explorer3={id: 3,name:'Felipe3'}
    const explorer4={id: 4,name:'Felipe4'}
    const explorers=[explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id',(req,res)=>{
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    console.log(`Getting explorer whith id  ${req.params.id}`)
    const explorer={id: 1,name:'Felipe'}
    res.status(200).json(explorer)
})

app.get('/v1/explorers',(req,res)=>{
    console.log(`Api Explorers POST requests ${new Date()}`)
    const requestsBody=req.body//parametro cliente  
    res.status(201).json({message:"Created"})
})

app.get('/v1/explorers/:id',(req,res)=>{
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer whith id  ${req.params.id}`)
    const requestsBody=req.body//parametro cliente  
    res.status(200).json({message:"Updated!"})
})

app.get('/v1/explorers/:id',(req,res)=>{
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Delete explorer whith id  ${req.params.id}`)
    const requestsBody=req.body//parametro cliente  
    res.status(200).json({message:"Deleted!"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})