const net = require('net');

//const connect = require('./connect');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 


  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    conn.write("Name: AAA");
    // conn.write("Move: up")
    // setInterval(() => {conn.write("Move: up");  }, 1000)
    // setInterval(() => {conn.write("Move: left");  }, 3000);
  });


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  








  //   conn.on('connect',(data) => {
//     console.log('data',data)
//  })

//  conn.on('connect', (data) => {
//    console.log("Successfully connected to the game server")
//  })

//  conn.on('connect',() => {
//    conn.write("Name:SAD")
//  })
//  conn.on('connect',() => {
//    conn.write("Move: up")
//  })
//  setInterval(function() => {
//   conn.write("Move: left")
// }); }, 2000);
// setTimeout(function(){ conn.on('connect',() => {
//   conn.write("Move: down")
// }); }, 100);


  return conn;
}




module.exports = {connect};