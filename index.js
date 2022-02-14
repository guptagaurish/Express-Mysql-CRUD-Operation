const express = require('express');
const res = require('express');

const bodyParser = require('body-parser')
const app = express();
const port = 5000;

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

const employeeRoutes = require('./src/routes/employee.route');
app.use('/api/v1/employee', employeeRoutes)

app.listen(port, ()=>{
    console.log('running successfully on port');
})
