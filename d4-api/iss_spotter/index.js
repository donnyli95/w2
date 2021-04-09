const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if(error) {
    return console.log("It Didn't Work!", error);
  }

  

  for (nums of passTimes.response) {
    let timeDate = new Date(nums.risetime * 1000)
    console.log(`Next pass at ${timeDate} for ${nums.duration} seconds`);
  }

});


// `Next pass at ${Date(nums.risetime)} for ${nums.duration} seconds`
