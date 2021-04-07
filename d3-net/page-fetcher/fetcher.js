const request = require('request');
const fs = require('fs');

const webpage = process.argv[2];
const page = process.argv[3];

let bodyData;

request(webpage, (error, response, body) => {
  console.log('error', error); // print error if it occurs
  console.log('statusCode', response && response.statusCode); // Print the response status code if respone was received
  fs.writeFile(page, body, (err) => {
    if (err) throw err;
  console.log(`Downloaded and saved ${body.length} bytes to ${page}`);
  });

});

// request is async