// Client creat connection to WebSocket server port 4000
let address = 'ws://localhost:4000/';
const connection = new WebSocket(address);

// be called when the connection is established
connection.onopen = (event) => {
  console.log("CLIENT connect to webSocket server successfully!!");

  // Send data to WebSocket server
  connection.send('I am client!!');
};

// be called when an error occurs
connection.onerror = (event) => {
  console.log(`WebSocket error: ${event.error}`);
};

// be called when receive message from the server.
connection.onmessage = (event) => {
  console.log('CLIENT receive message from server: ', event.data);
};
