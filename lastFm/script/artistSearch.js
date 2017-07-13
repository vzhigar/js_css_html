'use strict';
function ArtistSearch() {}

var search = 'artist.search&artist=';

ArtistSearch.prototype = Object.create(Loader.prototype);
ArtistSearch.prototype.constructor = ArtistSearch;

ArtistSearch.prototype.load = function (artist) {
  var queryParams = search + artist;
  Loader.prototype.load.call(this, queryParams);
};

var searchResults = new ArtistSearch();
searchResults.load('orjan nilsen');