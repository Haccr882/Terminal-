const express = require('express');
const { createContainer } = require('./docker/dockerManager');
const app = express();

app.use(express.json());

app.get('/health', (req,res)=>res.send('OK'));

app.post('/container', async (req,res)=>{
  try {
    const id = await createContainer();
    res.json({containerId: id});
  } catch(e){
    res.status(500).send(e.toString());
  }
});

module.exports = app;
