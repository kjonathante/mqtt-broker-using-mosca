var mosca = require("mosca");

var server = new mosca.Server({
  port: 1883
});

server.on("clientConnected", function(client) {
  console.log("client connected", client.id);
});

server.on("clientDisconnected", function(client) {
  console.log("client disconnected", client.id);
});

// fired when a message is published
server.on("published", function(packet, client) {
  console.log("Published", packet);
  console.log("Client", client);
  console.log("payload", packet.payload.toString("utf8"));
});

server.on("subscribed", function(topic, client) {
  console.log("subscribed: " + client.id);
});

server.on("unsubscribed", function(topic, client) {
  console.log("unsubscribed: " + client.id);
});

server.on("ready", function() {
  console.log("Mosca server is up and running");
});

// var ledCommand = "001";

// setInterval(function() {
//   ledCommand = ledCommand === "001" ? "002" : "001";
//   server.publish({ topic: "LEDToggle", payload: ledCommand });
// }, 1000);
