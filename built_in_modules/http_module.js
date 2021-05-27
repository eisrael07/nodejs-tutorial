const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Rebel Phantom world')
    }

    if (req.url === '/about') {
        res.end('About to Rebel Phantom world')
    }

    res.end(`
    <h1>Oops!!!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(8090)