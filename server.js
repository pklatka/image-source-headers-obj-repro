const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Log the request headers
    console.log('Request Headers:', req.headers);

    // Set the path to the image file you want to serve
    const imagePath = path.join(__dirname, 'image.jpg');

    // Check if the request URL matches the endpoint for the image
    if (req.url === '/image') {
        // Read the image file
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            // Set the appropriate headers
            res.writeHead(200, {
                'Content-Type': 'image/jpeg',
                'Content-Length': data.length,
            });

            // Serve the image
            res.end(data);
        });
    } else {
        // For any other request, respond with a 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
