const express = require('express');
const router = express.Router();
const Log = require('./models/logs.js');

// lits of comment Route
router.get('/', async (req, res) => {
    try {
    const logs = await Log.find();
    res.render('Index', { logs });
    } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
    }
    });
    
    // New Route
    router.get('/new', (req, res) => {
    res.render('New');
    });