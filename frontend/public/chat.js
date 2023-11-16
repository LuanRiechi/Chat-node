const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get('username');
const room = urlSearch.get('select_room');
const server = urlSearch.get('server');
const port = urlSearch.get('port');

const socket = io(`http://${server}:${port}`);

socket.on('connect', (socket) => {
  console.log(`Socket conectado: ${socket.id}`)
});

socket.on('disconnect', () => {
  console.log('Desconectado do socket');
});

socket.on('connect_error', (err) => {
  handleErrors("Erro na Conexão com o Servidor");
});

socket.on('connect_failed', (err) => {
  handleErrors("Falha na Conexão com o Servidor");
});

function handleErrors(message) {
  window.alert(`${message}`);
  window.location.href = "index.html";
}

const usernameDiv = document.getElementById("username");
usernameDiv.innerHTML = `Sala <strong>${room}</strong>`

socket.emit("select_room", {
  username,
  room
}, messages => {
  messages.forEach(message => createMessage(message));
});

function sendMessage() {
  const messageInput = document.getElementById("message_input");
  const message = messageInput.value;

  const data = {
    room,
    message,
    username
  };

  socket.emit("message", data);

  messageInput.value = "";
}

document.getElementById("message_input").addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

document.getElementById("sendMsg").addEventListener("click", () => {
  sendMessage();
});
socket.on("message", data => {
  createMessage(data);
});

function createMessage(data) {
  const messageDiv = document.getElementById("messages");
  if (data.username == username) {
    messageDiv.innerHTML += `
    <div class="my_new_message">
      <label class="form-label-my">
      
      <strong class="msgUser">${data.username}</strong> 
      <div class="newText">${data.text}</div>

      </label>
  <div class="horaDia">${dayjs(data.createdAt).format("DD/MM HH:mm")}</div>

    </div>
    `;
  } else {
    messageDiv.innerHTML += `
  <div class="new_message">
    <label class="form-label">
      
      <strong class="msgUser">${data.username}</strong> 
      <div class="newText">${data.text}</div>

      </label>
    <div class="horaDia">${dayjs(data.createdAt).format("DD/MM HH:mm")}</div>
  </div>
  
  `;
  }
  var chatContent = document.getElementById('chat_content');
  chatContent.scrollTop = chatContent.scrollHeight;
};


document.getElementById("logout").addEventListener("click", (event) => {
  socket.disconnect();
  window.location.href = "index.html";
})