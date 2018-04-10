const http = require('http');
const asyncModule = require('./asyncModule');

asyncModule.initialize().then(res => console.log('Async module initialized'));

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/say') {
        asyncModule.tell().then(data => {
            res.writeHead(200);
            res.end('I say: ' + data);
        }).catch(err => {
            res.writeHead(500);
            res.end('Error:' + err.message);
        })
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
}).listen(8000, () => console.log('Started'));

