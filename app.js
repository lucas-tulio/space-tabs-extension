// API
const apiUrl = 'http://localhost:5000/image';

// Get!
var get = new XMLHttpRequest();
get.onload = function() {
  const image_url = get.response
  document.getElementsByTagName('html')[0].style.backgroundImage = 'url("' + image_url + '")';
}
get.open('GET', apiUrl, true);
get.send();
