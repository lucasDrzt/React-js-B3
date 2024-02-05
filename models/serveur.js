const express = require('express');
const mongoose = require('mongoose');
const Image = require('./models/Image');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:5000', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
