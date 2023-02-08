const log = console.log;
const http = require('http');
const PORT = 8080 || process.env;
const fs = require('fs');

const server = http.createServer;

server((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
}).listen(PORT, (err) => {
    if (err) throw err;
    else {
        log('Starting Server...');
        log(`SERVER IS LISTENING ON PORT: ${PORT}...`);
    }
});

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});



