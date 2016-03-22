// API Settings
const baseUrl = 'http://www.astrobin.com/api/v1/';
const apiKey = '';
const apiSecret = '';
const auth = '&api_key=' + apiKey + '&api_secret=' + apiSecret + '&format=json';
const imageOfTheDayQuery = 'imageoftheday/?limit=1&offset=1';
const query = baseUrl + imageOfTheDayQuery + auth;

console.log(query);

// Get!
var get = new XMLHttpRequest();
get.onload = function() {
  console.log(JSON.parse(get.responseText));
}
get.open('GET', query, true);
get.send();
