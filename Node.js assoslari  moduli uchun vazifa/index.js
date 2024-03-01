const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
        if (req.url === '/') {
            `
                <html></html>
            `
        } else  if (req.url === '/books') {
        } else {
            res.end('Not found page')
        }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server ishga tushdi. Port: ", +PORT);
});
