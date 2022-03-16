const express = require('express');
const { get } = require('http');
const path = require('path')
const app = express();
const port = 3030;


app.use(express.static('public'));


app.get('/',(req,res)=>{
    return res.sendFile(path.resolve(__dirname,'views','home.html'))
   });


   app.listen(port,() => (console.log(`server running on por http://localhost:${port}`)))