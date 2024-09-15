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
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(morgan('tiny'));
app.use(express.json());
// MongoDB Connection
connectDB();