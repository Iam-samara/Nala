import express from 'express';
import {graphql} from 'graphql';
import Schema from './data/schema.js';
import bodyParser from 'body-parser';
var Nala = require('./nala.js');

let app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: false}));

var graphQLHandler = Nala(Schema, 'mongodb://emma:codesmith@ds037205.mongolab.com:37205/nala');

app.post('/',graphQLHandler);

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is listening on port 3000.");
});

module.exports = app;