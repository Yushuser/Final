const http = require('http');
const url = require('url');

// Create a server that listens for incoming requests
const server = http.createServer((req, res) => {
  // Parse the URL of the request
  const parsedUrl = url.parse(req.url, true);

  // If the request method is GET and the path is '/hello'
  if (req.method === 'GET' && parsedUrl.pathname === '/hello') {
    // Get the name parameter from the query string
    const name = parsedUrl.query.name;

    // Set the response headers
    res.setHeader('Content-Type', 'text/plain');

    // Send the response body
    res.write(`Welcome ${name}`);
    res.end();
  } else {
    // If the path is not '/hello', return a 404 error
    res.statusCode = 404;
    res.end();
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
