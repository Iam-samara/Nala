import express from 'express';
import {graphql} from 'graphql';
import Schema from './data/schema.js';
import bodyParser from 'body-parser';
var Nala = require('./nala.js');

let app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: false}));

var graphQLHandler = Nala(Schema, 'postgres://vmheghxjgpisqb:LXBXlYU2Zh63ClWZMuDQutCL8O@ec2-54-204-8-138.compute-1.amazonaws.com:5432/d82jejkd94e7t9');

app.post('/',graphQLHandler);

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is listening on port 3000.");
});

module.exports = app;