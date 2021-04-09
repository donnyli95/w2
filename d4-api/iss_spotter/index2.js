// const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss_promised');

const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(anything => {
    for (let nums of anything) {
      let timeDate = new Date(nums.risetime * 1000);
      console.log(`Next pass at ${timeDate} for ${nums.duration} seconds`);
    }
  });




// fetchMyIP()
//   .then(fetchCoordsByIp)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(typeof body));

// breakdown test code

// fetchMyIP()
//   .then(body => console.log(body));

// fetchCoordsByIp("23.17.234.217")
//   .then(body => console.log(body));

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' })
//   .then(body => console.log(body));

/*
"23.17.234.217"

{ latitude: '49.27670', longitude: '-123.13000' }
*/