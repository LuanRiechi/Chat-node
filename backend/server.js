const { serverHttp } = require("./http");
require("./websocket");

serverHttp.listen(3000, () => console.log("Server is running on PORT 3000"));

