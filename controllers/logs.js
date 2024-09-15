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

    // Create Route
router.post('/', async (req, res) => {
    try {
      const {title,entry}=req.body;
      const  newLog=new Log({
        title,
        entry,
        shipIsBroken: req.body.shipIsBroken=="on",
  
      })  
      const val= await newLog.save();
      res.redirect('/logs');
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  });
  // Show Route
router.get('/:id', async (req, res) => {
    try {
      const log = await Log.findById(req.params.id);
      res.render('Show', { log });
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // Delete Route
router.get('/delete/:id', async (req, res) => {
    try {
      await Log.findByIdAndDelete(req.params.id);
      res.redirect('/logs');
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // edit route

router.get('/edit/:id', async (req, res) => {
    try {
      const myId = req.params.id;
      const myOutput = await Log.findById(myId);
      res.render('update', { myOutput }); 
  
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  });