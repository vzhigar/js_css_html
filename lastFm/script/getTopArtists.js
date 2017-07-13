'use strict';
function GetTopArtists() {}

var getTopArtists = 'chart.gettopartists';

GetTopArtists.prototype = Object.create(Loader.prototype);
GetTopArtists.prototype.constructor = GetTopArtists;

GetTopArtists.prototype.load = function () {
  Loader.prototype.load.call(this, getTopArtists);
};

var artists = new GetTopArtists();
artists.load();