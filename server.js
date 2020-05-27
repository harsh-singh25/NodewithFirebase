const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path');

const app = express();
app.use(logger('dev'));
app.set('view engine','ejs');
app.use(express.static('views'));
app.set('views',path.join(__dirname,'/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var indexRoute = require('./controllers/controller.model');

app.use('/',indexRoute);

port = process.env.PORT || 2000;
app.listen(port,()=> {
    console.log("SERVER RUNNING ON PORT" + port)
})