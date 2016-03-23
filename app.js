// API
const apiUrl = 'http://autopresentr.co:8001/image';

// Get!
var get = new XMLHttpRequest();
get.onload = function() {
  const result = JSON.parse(get.response);
  
  // Apply the data on the screen
  const imageUrl = result.url_hd;
  const author = result.user;
  const title = result.title;
  const imageId = result.id;
  
  document.getElementsByTagName('html')[0].style.backgroundImage = 'url("' + imageUrl + '")';
  document.getElementById('image-title').innerHTML = title;
  document.getElementById('image-author').innerHTML = 'Image by ' + author;
  document.getElementById('image-link').href = 'http://astrobin.com/' + imageId;
}

get.onerror = function() {
  document.getElementById('image-author').innerHTML = 'Error loading image';
}

get.open('GET', apiUrl, true);
get.send();
