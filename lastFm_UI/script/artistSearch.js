var artistSearch = (function () {
  'use strict';

  function ArtistSearch() {}

  var search = 'artist.search&artist=';
  var pageNumber = '&page=';

  ArtistSearch.prototype = Object.create(Loader.prototype);
  ArtistSearch.prototype.constructor = ArtistSearch;

  ArtistSearch.prototype.load = function (artist, number) {
    var queryParams = number === undefined ? search + artist : search + artist + pageNumber + number;
    Loader.prototype.load.call(this, queryParams, searchTopView);
  };
  return new ArtistSearch();
}());