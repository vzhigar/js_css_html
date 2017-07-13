var artistGetInfo = (function () {
  'use strict';

  function ArtistGetInfo() {}

  var reqParamArtist = 'artist.getinfo&artist=';

  ArtistGetInfo.prototype = Object.create(Loader.prototype);
  ArtistGetInfo.prototype.constructor = ArtistGetInfo;

  ArtistGetInfo.prototype.load = function (artist) {
    var queryParam = reqParamArtist + artist;
    Loader.prototype.load.call(this, queryParam, artistInfoView);
  };

  return new ArtistGetInfo();
}());