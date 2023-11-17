const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const src = fs.createReadStream('pic1.jpg');
    src.pipe(res);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});