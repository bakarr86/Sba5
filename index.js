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

// Routes importation
const logsController = require('./controllers/logs');
app.use('/logs', logsController);

// Index Route Implementation
app.get('/', (req, res) => {
    res.send('Welcome to Captain\'s Log App!');
  });
// server connection
  const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});