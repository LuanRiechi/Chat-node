const { Server } = require("socket.io");
const cors = require("cors");

const io = new Server({
  cors: {
    origin: "*",
  }
});

const users = [];
const messages = [];
const port = 3001;

io.on("connection", (socket) => {
  console.log(`New Socket! id: ${socket.id}`);
  socket.on("select_room", (data, callback) => {
    socket.join(data.room);

    const userInRoom = users.find(
      (user) => user.username === data.username && user.room === data.room
    );

    if (userInRoom) {
      userInRoom.socket_id = socket.id;
    } else {
      users.push({
        room: data.room,
        username: data.username,
        socket_id: socket.id,
      });
    }
    console.log(`Socket linkado: ${socket.id} <-> ${data.username}`);
    const messagesRoom = getMessagesRoom(data.room);
    callback(messagesRoom);
  });

  socket.on("message", (data) => {
    const message = {
      room: data.room,
      username: data.username,
      text: data.message,
      createdAt: new Date(),
    };

    messages.push(message);
    io.to(data.room).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log(`Socket desconectado: ${socket.id}`);
  });

});
function getMessagesRoom(room) {
  const messagesRoom = messages.filter((message) => message.room === room);
  return messagesRoom;
}

console.log(`WebSocket server is listening on port ${port}`);
io.listen(port);