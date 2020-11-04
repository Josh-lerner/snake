const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  conn.on('close', () => console.log('GAMEOVER')); // close message
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);  // handler for data

  });
  return conn;
}

console.log('Connecting ...');
connect();
