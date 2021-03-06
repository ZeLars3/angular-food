const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const orderRoutes = require('./routes/order');
const categoryRoutes = require('./routes/category');
const positionRoutes = require('./routes/position');
const keys = require('./config/keys');
const app = express();

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB...', err));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;
