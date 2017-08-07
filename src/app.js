'use strict';

const Hapi = require('hapi');
const auth = require('./auths/auth');
const wurst = require('wurst');
const path = require('path');
//for documentation of APIs
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});


//API documentation
const options_docs = {
    info: {
            'title': 'Test API Documentation',
            'version': Pack.version,
        }
    };

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options_docs
    }
], (err) => {
        // Start the server
        server.start((err) => {
            if (err) {
                throw err;
            }
            console.log('Server running at:', server.info.uri);
        });
    });

server.register({
    register: require('hapi-dev-errors'),
    options: {
      showErrors: process.env.NODE_ENV !== 'production'
    }
  }, err => {
    if (err) {   
        console.log(err); // handle plugin registration error
    }
})

server.register({
  register: wurst,
  options: {
    // ignore: './routes/**/*.js',
    cwd: path.join(__dirname, 'routes'),
    log: true
  },
}, function(err) {
  if (err) {
    throw err;
  }
});


