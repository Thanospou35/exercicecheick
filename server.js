const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Node !!!!</h1>\n");
});

fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Fichier créer avec succés");
});

fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


server.listen(3000, () => {
    console.log("Le serveur a été bien éxecuté dans le  http://localhost:3000");
});
