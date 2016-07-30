import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser'

import webpack from 'webpack';
import config from '../webpack.config';

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/property-manager');

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import api from './api';
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
  console.log(err || `Server Listening on Port ${port}`); // eslint-disable-line no-console
});
