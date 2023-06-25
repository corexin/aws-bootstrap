import {hostname} from 'os';
import http from 'http';

const message = 'hello world\n';
const port = 8080;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(message);
});

server.listen(port, hostname, ()=> {
    console.log("erver running at ${hostname} : ${port}");

})