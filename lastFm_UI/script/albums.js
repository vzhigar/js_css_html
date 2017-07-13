var albums = (function () {
  'use strict';

  function GetAlbumsInfo() {}

  var topAlbums = 'artist.gettopalbums&artist=';

  GetAlbumsInfo.prototype = Object.create(Loader.prototype);
  GetAlbumsInfo.prototype.constructor = GetAlbumsInfo;

  GetAlbumsInfo.prototype.load = function (artist) {
    var queryParam = topAlbums + artist;
    Loader.prototype.load.call(this, queryParam, albumsView);
  };

  return new GetAlbumsInfo();
}());