function searchArtist(number) {
  var artist = document.getElementById('artist').value;
  var content = document.querySelector('.content');
  content.innerHTML = '';
  artistSearch.load(artist, number);
}

function artistInfo(artist) {
  artistGetInfo.load(artist);
}

function albumInformation(artist, album) {
  albumGetInfo.load(artist, album);
}

function getTop(number) {
  document.querySelector('.search').innerHTML = '';
  document.querySelector('.content').innerHTML = '';
  getTopArtists.load(number);
}

function getAlbumsList(artist) {
  albums.load(artist);
}

function getRandomLikes() {
  var minLikes = 1;
  var maxLikes = 5;
  return Math.floor(Math.random() * (maxLikes - minLikes) + minLikes);
}

function showSearchBar() {
  var search = document.querySelector('.search');
  search.innerHTML = '';
  var paragraph = document.createElement('p');
  paragraph.setAttribute('align', 'center');
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.id = 'artist';
  input.placeholder = 'Enter artist name...';
  var button = document.createElement('button');
  button.setAttribute('onclick', 'searchArtist()');
  button.id = 'searchButton';
  button.innerHTML = 'Search';
  paragraph.appendChild(input);
  paragraph.appendChild(button);
  search.appendChild(paragraph);
}

getTop();