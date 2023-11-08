const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

module.exports = { serverHttp, io };
