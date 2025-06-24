import http from 'http'

// nodemon  <---> node --watch filename
// EventEmitter
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Hello Server.</h1>");
        res.end();
    }

    if (req.url === '/contact-us') {
        res.write("Contact Us.");
        res.end();
    }

    if (req.url === '/about-us') {
        res.setHeader('Content-Type', 'text/plain')
        res.write("About Us.");
        res.end();
    }

    if (req.url === '/user-profile') {
        res.setHeader('Content-Type', 'text/plain')
        res.write("User Profile: Rahul Kumar");
        res.end();
    }
    
})

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server listening on PORT : ${PORT}`);
})