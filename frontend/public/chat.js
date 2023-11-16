const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get('username');
const room = urlSearch.get('select_room');
const server = urlSearch.get('server');
const port = urlSearch.get('port');

const socket = io(`http://${server}:${port}`);

socket.on('connect', () => {
  console.log('Conecatado ao socket');
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

function handleErrors(error) {
  window.alert(`${error.message}`);
  window.location.href = "index.html";
}

const usernameDiv = document.getElementById("username");
usernameDiv.innerHTML = `Olá <strong>${username}</strong> - Você está na sala <strong>${room}</strong>`

socket.emit("select_room", {
  username,
  room
}, messages => {
  messages.forEach(message => createMessage(message));
});

document.getElementById("message_input").addEventListener("keypress", (event) => {
  if(event.key === 'Enter') {
    const message = event.target.value;

    const data = {
      room,
      message,
      username
    }

    socket.emit("message", data);

    event.target.value = "";
  }
});

socket.on("message", data => {
  createMessage(data);
});

function createMessage(data) {
  const messageDiv = document.getElementById("messages");

  messageDiv.innerHTML +=`
  <div class="new_message">
    <label class="form-label">
      <strong>${data.username}</strong> <span>${data.text} - ${dayjs(data.createdAt).format("DD/MM HH:mm")}</span>
    </label>
  </div>
  `;
};

document.getElementById("logout").addEventListener("click", (event) => {
  socket.disconnect();
  window.location.href = "index.html";
})