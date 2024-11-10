const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "PUT") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("PUT-запрос обработан");
  } else if (req.method === "DELETE") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("DELETE-запрос обработан");
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Метод не поддерживается");
  }
});

server.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
