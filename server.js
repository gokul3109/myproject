const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
const userRoutes = require('./src/pages/api/routes/')
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const port = 4000;

app.prepare().then(()=>{
    const server =express();

    server.get('/api/test', (req,res)=>{
        res.json({message:'Hello from custom express server'});
    });
    server.all('*', (req,res)=>{
        return handle(req,res);
    });

    server.list(port,(err)=>{
        if(err) throw err;
        console.log(`Server running on http://localhost:${port}`);
    });
});