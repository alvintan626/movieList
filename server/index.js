const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const control = require('./controller.js')

// import server from './controller.js'

const middleware = express.static(path.join(__dirname,'../client/dist', ));

app.use(middleware);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/freeMovies', (req,res)=>{
    control.getServer((err,data)=>{

        if (err){
           throw err;
        }
      
        console.log(JSON.stringify(data))
        res.status(200).send(JSON.stringify(data));
   })

})

// app.post()

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`listening in on ${PORT}`);
})

