const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const { health } = require('./controllers/health');

const Router = express.Router();

/**
 * Define our 'express-like' app
 */
const app = express();

/**
 * Middleware
 */
app.use(cors());

/**
 * Allows binary file uploads to your lambdas. 6mb max payload.
 */
app.use(bodyParser.json({ limit: '6mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '6mb', extended: true }));

/**
 * Route definitions.
 */
Router.get('/health', health);

/**
 * Apply Router.
 */
app.use('/v1', Router);

/**
 * Creates our express-like handler for proxy-plus
 */
module.exports = app;