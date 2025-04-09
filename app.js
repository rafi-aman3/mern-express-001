// COMMON JS
// const express = require('express');

//ES6 MODULE
import express from 'express'
import { PORT } from './config/config.js';
import router from './routes/api.js';

const app = express();

app.use('/api/v1', router);

app.listen(PORT,() => {
    console.log(`BACKEND SERVER STARTED AT ${PORT}`)
})
