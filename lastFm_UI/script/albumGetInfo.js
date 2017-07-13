var albumGetInfo = (function () {
  'use strict';

  function AlbumGetInfo() {}

  var reqParamArtist = 'album.getinfo&artist=';
  var reqParamAlbum = '&album=';

  AlbumGetInfo.prototype = Object.create(Loader.prototype);
  AlbumGetInfo.prototype.constructor = AlbumGetInfo;

  AlbumGetInfo.prototype.load = function (artist, album) {
    var queryParam = reqParamArtist + artist + reqParamAlbum + album;
    Loader.prototype.load.call(this, queryParam, albumInfoView);
  };

  return new AlbumGetInfo();
}());