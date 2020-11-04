const net = require('net');
const {IP}= require('./constants');
const {PORT}= require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', () => console.log('Successfully connected to game server'));  
  conn.on('connect', () => conn.write('Name: JEL'));
  
  
  conn.on('data', (data) => console.log('Server says: ', data));  // handler for data

  return conn;
}

module.exports = {connect};
