const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/user');
const db = require('./util/db')
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//handle cors
app.use(cors()); 
app.use(router);
db.sync();
app.listen(3000);

