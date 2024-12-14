const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Unhandled promise rejections are not caught by default, leading to silent errors
const promiseThatRejects = Promise.reject(new Error('Something went wrong'));

//This will log an error in the console when running in a non production environment
promiseThatRejects.catch(error => {
  console.error('Promise rejection handled:', error);
});
//In a production environment, it is essential to use a proper error-handling mechanism
// to prevent unexpected crashes.