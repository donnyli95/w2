const request = require('request-promise-native');

const fetchISSFlyOverTimes = function(coord) {

  const { latitude, longitude } = coord;

  const flyOver = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;


  return request(flyOver);
};

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' })
  .then(body => console.log(body));