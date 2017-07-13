'use strict';
function Loader() {}

Loader.prototype.load = function (queryParams) {
    var API_ROOT_URL = 'http://ws.audioscrobbler.com/2.0/?method=';
    var API_KEY = '&api_key=141d71bf2600cfe131eac31148318134';
    var RESPONSE_FORMAT = '&format=json';

    var result;
    var url_string = API_ROOT_URL + queryParams + API_KEY + RESPONSE_FORMAT;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url_string);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
                console.log(result);
            } else {
              console.log(xhr.statusText);
            }
        }
    }
};
