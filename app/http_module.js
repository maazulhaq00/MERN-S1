const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Welcome</h1> <p>This is home page!</p>");
        res.end()
    }
    else if (req.url === "/about") {        
        res.setHeader("Content-Type", "text/plain")
        res.write("This is about page!");
        res.end()
    }
    else if (req.url === "/contact") {        
        res.setHeader("Content-Type", "text/plain")
        res.write("This is contact page!");
        res.end()
    }
    else {        
        res.setHeader("Content-Type", "text/plain")
        res.write("404, Route not found");
        res.end()
    }
});

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})