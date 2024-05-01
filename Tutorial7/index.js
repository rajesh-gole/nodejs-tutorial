const http = require('http');

const PORT = 3000;
const HOST = '127.0.0.1';

const httpServer = http.createServer((req, res) => {
    res.end('<h1>Hi Welcome to Input Output Campus</h1>')
});

httpServer.listen(PORT, HOST, () => {
    console.log(`Server Started at http://${HOST}:${PORT}`);
})