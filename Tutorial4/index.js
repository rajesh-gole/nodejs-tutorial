const http = require('http');

// console.log(http);

// http.createServer((req, res) => {
//     res.end('Starting first server with Input Output Campus')
// }).listen(3000);

const PORT = 3000;
const HOST = '127.0.0.1';

const httpServer = http.createServer((req, res) => {
    res.end('<h1>Starting first server with Input Output Campus</h1>')
});

httpServer.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
})









// http module help us to create, open, read, write, delete and close files on the server