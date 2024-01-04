const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const catAPI = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(catAPI, (error, response, body) => {
    if (error) {
      console.log("Error", error);
    } else if (response.statusCode !== 200) {
      console.error("API request failed:", response.statusCode);
    } else {
      const data = JSON.parse(body);

      if (Array.isArray(data) && data.length > 0) {
        //ensures that the API includes data and is not empty
        const userEntry = data[0];

        // Check if the user entry has a description property
        if (userEntry.description) {
          console.log(
            `Description for ${breedName} breed:`,
            userEntry.description
          );
        } else {
          console.log(`No description found for ${breedName} breed.`);
        }
      } else {
        console.log(`No data found for ${breedName} breed.`);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
