var getTopArtists = (function () {
  'use strict';

  function GetTopArtists() {}

  var query = 'chart.gettopartists';
  var pageNumber = '&page=';

  GetTopArtists.prototype = Object.create(Loader.prototype);
  GetTopArtists.prototype.constructor = GetTopArtists;

  GetTopArtists.prototype.load = function (number) {
    var queryParam = number === undefined ? query : query + pageNumber + number;
    Loader.prototype.load.call(this, queryParam, searchTopView);
  };

  return new GetTopArtists();
}());