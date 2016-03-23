// Tracking
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28810390-7']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Button Event Tracking
function trackButton(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
  window.open(e.target.dataset.href, '_blank');
};

var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', trackButton);
}

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
  
  const imageTitleElement = document.getElementById('image-title');
  imageTitleElement.innerHTML = title;
  imageTitleElement.dataset.href = 'http://www.astrobin.com/' + imageId + '/';

  const imageAuthorElement = document.getElementById('image-author');
  imageAuthorElement.innerHTML = 'Image by ' + author;
  imageAuthorElement.dataset.href = 'http://www.astrobin.com/users/' + author + '/';
}

get.onerror = function() {
  document.getElementById('image-author').innerHTML = 'Error loading image';
}

get.open('GET', apiUrl, true);
get.send();
