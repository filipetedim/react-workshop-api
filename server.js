// Packages
const Express = require('express');
const Http = require('http');
const BodyParser = require('body-parser');
const Cors = require('cors');
const Chalk = require('chalk');

// Configs
const Config = require('./config');

// Init
const app = Express();
const server = Http.Server(app);

// Middlewares
app.options('*', Cors());
app.use(Cors());
app.use(BodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(BodyParser.json({ limit: '5mb' }));

// Routes
app.use('/', require('./routes'));

server.listen(
  process.env.PORT || Config.Server.PORT,
  () => console.log(Chalk.cyan(` Server started on ${Config.Server.PORT} `)), // eslint-disable-line
);
