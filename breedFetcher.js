const request = require("request");

const catAPI = "https://api.thecatapi.com/v1/breeds/search?q=siberian";

request(catAPI, (error, response, body) => {
  if (error) {
    console.log("Error", error);
  } else if (response.statusCode !== 200) {
    console.error("API request failed:", response.statusCode);
  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  }
});

