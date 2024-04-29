const http = require('http');

//req=> common methods for request - get(), post, delete, put
// res => get status code and data (including head and body)

// Status Code:
// 100 - 199 : Informational response
// 200 - 299 : Success
// 300 - 399 : Redirect
// 400 - 499 : Client err
// 500 - 599 : Server err

const PORT = 3000;
const HOST = '127.0.0.1';

const httpServer = http.createServer((req, res) => {
    res.writeHead(202, {
        'Content-Type': 'text/plain'
    });

    res.write('Hello Rajesh');

    res.end();
    // res.end('<h1>Starting first server with Input Output Campus</h1>')
});

httpServer.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
})