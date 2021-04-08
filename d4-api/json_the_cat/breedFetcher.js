const request = require('request');

const webpage = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {

  request(webpage + breedName, (error, response, body) => {
    if (error) {
      callback(error);
    } else {

      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("error", null);
      } else {
        callback(null, data[0].description);
      }
    }


  
  });
  
};

module.exports = { fetchBreedDescription };



