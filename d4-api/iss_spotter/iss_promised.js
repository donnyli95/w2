const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIp = function(ipVar) {

  const ipGeo = 'https://freegeoip.app/json/';
  const ip = JSON.parse(ipVar).ip;
  return request(ipGeo + ip);
};

const fetchISSFlyOverTimes = function(coord) {

  const { latitude, longitude } = JSON.parse(coord);

  const flyOver = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;


  return request(flyOver);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIp) // fetchCoordsByIp(ip) <- from fetchMyIP
    .then(fetchISSFlyOverTimes)
    .then(issData => {
      const { response } = JSON.parse(issData);
      return response;
    });

};

// module.exports = { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes };
module.exports = { nextISSTimesForMyLocation };