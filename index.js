//dependencies set up
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const connectDB= require('./mongo/connect.jsx')
const morgan=require('morgan');
const methodOverride = require('method-override');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('views', __dirname + '/views');