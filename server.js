const WebSocket = require('ws');

// Create WebSocket with port 4000
const wss = new WebSocket.Server({ port: 4000 });

// Create connection
wss.on('connection', function connection(ws, req) {
  // Event: 'message' >> Websocket waiting for receive data from client as realltime
  ws.on('message', function incoming(data) {
    console.log('SERVER Received data from client: %s', data);
  });

  // Event: 'close' >> Emitted when connection is closed
  ws.on('close', function close(code, reason) {
    console.log(`disconnected with code: ${code} and reason: ${reason}`);
  });

  // Send 'init message to client' to client when first connection
  ws.send('init message to client');
});