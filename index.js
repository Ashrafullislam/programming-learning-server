const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000  ;


app.use(cors())
const category = require('./data/category.json')
const courses = require ('./data/courses.json')
app.get('/', (req,res) => {
    res.send('Programming Learn api server running ')
})
//  load data of category 
app.get('/category-data', (req,res)=> {
    res.send(category)
})

// load data of courses details 
app.get('/courses-data', (req,res) => {
    res.send(courses);
    console.log(res.params.id)
})

app.listen(port,  ()=> {
    console.log('Server running on learning program ' , port )
})
