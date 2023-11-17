const http = require('http');
const dns = require('node:dns');
const domainName = 'www.miu.edu';

/* Using dns.lookup()
const server = http.createServer((req, res) => {

    dns.lookup(domainName, (err, address, family) => {
        console.log('address: %j family: IPv%s', address, family);
        res.end(`Address: ${address}, Family: IPv${family}`);
    });
});
*/

const server = http.createServer((req, res) => {
    dns.resolve4(domainName, (err, addresses) => {
        if (err) throw err;

        console.log(`IP address of ${domainName}: ${JSON.stringify(addresses)}`);

        addresses.forEach((ipaddress) => {
            dns.reverse(ipaddress, (err, hostnames) => {
                if (err) {
                    throw err;
                }
                console.log(`reverse of ${ipaddress}: ${JSON.stringify(hostnames)}`);
            });
        });
        res.end(`IP address of ${domainName}: ${JSON.stringify(addresses)}`);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});