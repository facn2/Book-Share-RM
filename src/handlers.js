const fs = require('fs');
const path = require('path');
const pg = require('pg');
const http = require('http');

const handleHomeRoute = (response) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html')
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, 'Content-Type: text/html')
            response.end('<h1> sorry, the page doesnt response </h1>')
        } else {
            response.writeHead(200, 'Content-Type: text/html')
            response.end(file);
        }
    });
}

const handlePublic = (response, request) => {
    const extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon',
        img: 'image/png'
    }[request.url.split('.')[1]];

    const filePath = path.join(__dirname, '..', request.url);
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, 'Content-Type: text/html');
            response.end('<h1>Sorry something went wrong</h1>');
        } else {
            response.writeHead(200, `Content-Type:${extensionType}`);
            response.end(file)
        }
    })
}
module.exports = {
    handleHomeRoute,
    handlePublic
}
