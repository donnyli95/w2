/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
  
    fetchCoordsByIp(ip, (error, coordinates) => {
      if (error) {
        console.log("It didn't work", error);
        return;
      }
    
      fetchISSFlyOverTimes(coordinates, (error, nextPasses) => {
        if (error) {
          console.log("It didn't work", error);
          return;
        }
        
        callback(null, nextPasses);

      });
    });
  });
};

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  const ipv4 = 'https://api.ipify.org?format=json';

  request(ipv4, (error, response, body) => {
    if (error) {
      callback(error);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
      
    } else {

      const ip = JSON.parse(body).ip;
      callback(null, ip);
    }
  });

};




const fetchCoordsByIp = function(ip, callback) {

  const ipGeo = 'https://freegeoip.app/json/';

  request(ipGeo + ip, (error, response, body) => {
    if (error) {
      callback(error);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching Coordinates. Response: ${body}`;
      callback(Error(msg), null);
      return;
      
    } else {

      const { latitude, longitude } = JSON.parse(body);
      
      callback(null, { latitude, longitude });
    }
  });
};



const fetchISSFlyOverTimes = function(coords, callback) {

  const flyOver = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(flyOver, (error, response, body) => {
    if (error) {
      callback(error);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching data. Response: ${body}`;
      callback(Error(msg), null);
      return;
      
    } else {

      const data = JSON.parse(body);
      
      callback(null, data);
    }
  });
};



module.exports = { nextISSTimesForMyLocation };