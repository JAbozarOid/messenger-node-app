// with the help of nodemon we understand that the server is on development mode
// if code will change, we need to command node index to see the changes,
// but i wrote a script in package.json, so for do that just command "npm run dev" to server shows changes

const express = require("express");
var http = require("http");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

//middleware
app.use(express.json()); // decoding json data
app.use(cors());

// open a connection on socket.io
io.on("Connection", (socket) => {
  console.log("connected");
});

//listen to server to corresponding port
server.listen(port, () => {
  console.log("server started");
});
