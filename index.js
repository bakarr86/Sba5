//dependencies set up
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const connectDB= require('./mongo/connect.jsx')
const morgan=require('morgan');
const methodOverride = require('method-override');