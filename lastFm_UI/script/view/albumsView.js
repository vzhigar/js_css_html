function albumsView(response) {
  var divAlbums = document.querySelector('.albums');
  var artistAlbums = response.topalbums.album;
  for (var i = 0; i < artistAlbums.length; i++) {
    var imageSource = artistAlbums[i].image[2]['#text'];
    var albumName = artistAlbums[i].name;
    var artistName = artistAlbums[i].artist.name;
    var div = document.createElement('div');
    div.className = 'album';
    var image = document.createElement('img');
    image.className = 'albumImage';
    image.setAttribute('src', imageSource);
    image.setAttribute('alt', albumName);
    image.setAttribute('title', 'Album information');
    image.setAttribute('onclick', 'albumInformation(' + "'" + artistName + "', " + "'" + albumName + "'" + ")");
    div.appendChild(image);
    var paragraph = document.createElement('p');
    paragraph.className = 'albumName';
    paragraph.innerHTML = albumName;
    div.appendChild(paragraph);
    divAlbums.appendChild(div);
  }
};