const request = require("request");

const breedName = process.argv[2];

if (!breedName) {
  console.error('Please provide a cat breed.');
  process.exit(1);
}

const catAPI = "https://api.thecatapi.com/v1/breeds/search?q=${breedName}";

request(catAPI, (error, response, body) => {

  if (error) {
    console.log("Error", error);
  } else if (response.statusCode !== 200) {
    console.error("API request failed:", response.statusCode);
  } else {
    const data = JSON.parse(body);
    
    console.log(data);
    console.log(data.description);
  }
});

