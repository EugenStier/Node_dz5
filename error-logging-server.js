const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  try {
    throw new Error("Пример ошибки");
  } catch (error) {
    fs.appendFile(
      "errors.log",
      `${new Date().toISOString()} - ${error.message}\n`,
      (err) => {
        if (err) {
          console.error("Ошибка при записи в файл:", err);
        }
      }
    );

    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});
server.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
