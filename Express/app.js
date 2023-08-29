const express = require('express')
const app = express()
//get ,put,post,delete
const courses = [
    {id:1,tech:"javascript"},
    {id:2,tech:"java"},
    {id:3,tech:"python"},
]
app.get('/',(req,res)=>{
    res.send('hello from srinivas')
})
app.get('/about',(req,res)=>{
    res.send('create a route ')
})
app.get('/contact',(req,res)=>{
    res.send('create a contact route  @abcd.com')
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})
//Route Parameters
app.get('/courses/:id',(req,res)=>{
    const course = courses.find((course)=>course.id === parseInt(req.params.id))
    if(!course)res.status(404).send("what are you looking for does not exist")
    res.send(course)
})
const PORT =process.env.PORT | 3000
app.listen(PORT,()=>console.log(`${PORT} port is runnung`))