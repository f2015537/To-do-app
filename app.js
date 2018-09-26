const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

//template sengine

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);
 
 //listen to port
 app.listen(3000);
 console.log('You are lisstening to port 3000');