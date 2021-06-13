const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
require('dotenv').config();
const route = require('./routes');
const bodyParser = require('body-parser');
const multer = require('multer');

app.use('/', route);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});