const request = require('request');

request('https://www.example.edu', (error, response, body) => {
  console.log('error', error); // print error if it occurs
  console.log('statusCode', response && response.statusCode); // Print the response status code if respone was received
  console.log('body', body); // print HTML for given page
});