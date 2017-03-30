'use strict';
const http = require('http');
const path = require('path');
const Tailor = require('node-tailor');

const tailor = new Tailor({
    templatesPath: path.join(__dirname, 'templates')
});

const server = http.createServer((req, res) => {
    console.log("Server calling " + req.url);
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        return res.end('');
    }
    return tailor.requestHandler(req, res);
});

server.listen(8081, () => {
    console.log('Tailor started at port 8081');
});

tailor.on('error', (request, error) => {
    console.log(error);
});
