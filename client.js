const net = require('net');

//const connect = require('./connect');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect',(data) => {
    console.log('data',data)
 })

 conn.on('connect', (data) => {
   console.log("Successfully connected to the game server")
 })

 conn.on('connect',() => {
   conn.write("Name:SAD")
 })
 conn.on('connect',() => {
   conn.write("Move: up")
 })
  return conn;
}

module.exports = {connect};