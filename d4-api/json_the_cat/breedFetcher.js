const request = require('request');

const webpage = 'https://api.thecatapi.com/v1/breeds/search?q=';

const quer = process.argv[2];


request(webpage + quer, (error, response, body) => {
  if (error) {
    console.log('error', error); // print if error occurs
    console.log('statusCode', response && response.statusCode); // Print the response status code
  }
 
  const data = JSON.parse(body);

  if (data.length < 1) {
    console.log("I think you made a mistake");
  } else {
    console.log(data[0].description);
    console.log(typeof data);
  }


});
