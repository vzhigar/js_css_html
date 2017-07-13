'use strict';

function Loader() {}

Loader.prototype.load = function (queryParams, callback) {
  var API_ROOT_URL = 'http://ws.audioscrobbler.com/2.0/?method=';
  var API_KEY = '&api_key=141d71bf2600cfe131eac31148318134';
  var RESPONSE_FORMAT = '&format=json';
  var LIMIT = '&limit=12';

  var url_string = API_ROOT_URL + encodeURI(queryParams) + API_KEY + RESPONSE_FORMAT + LIMIT;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url_string);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      }
    } else {
      console.log(xhr.statusText);
    }
  };
  xhr.send(null);
};