const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const server = http.createServer(app);

server.listen(8000,'localhost',);