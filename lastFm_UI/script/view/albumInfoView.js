function albumInfoView(response) {
  var albumInfo = response.album;
  var artist = albumInfo.artist;
  var album = albumInfo.name;
  var tracks = albumInfo.tracks;
  document.querySelector('.search').innerHTML = '';
  var content = document.querySelector('.content');
  content.innerHTML = '';
  var par = document.createElement('p');
  var albumHeader = document.createElement('h3');
  albumHeader.className = 'artistName';
  albumHeader.innerHTML = album;
  par.appendChild(albumHeader);
  var likes = document.createElement('ul');
  likes.className = 'likes';
  var likesCount = getRandomLikes();
  for (var i = 0; i < likesCount; i++) {
    var like = document.createElement('li');
    like.className = 'likes';
    likes.appendChild(like);
  }
  par.appendChild(likes);
  content.appendChild(par);
  var div = document.createElement('div');
  div.className = 'info';
  var imageSource = albumInfo.image[3]['#text'];
  var image = document.createElement('img');
  image.setAttribute('src', imageSource);
  image.className = 'pic';
  image.setAttribute('alt', album);
  div.appendChild(image);
  var artistHeader = document.createElement('h5');
  artistHeader.className = 'albumInf';
  artistHeader.innerHTML = "Artist: " + artist;
  div.appendChild(artistHeader);
  var albumYear = document.createElement('h5');
  albumYear.className = 'albumInf';
  var year = albumInfo.wiki !== undefined ? albumInfo.wiki.published : 'N/A';
  albumYear.innerHTML = "Year: " + year;
  div.appendChild(albumYear);
  var genreHeader = document.createElement('h5');
  genreHeader.className = 'albumInf';
  var tags = '';
  if (albumInfo.tags !== undefined && albumInfo.tags.tag.length !== 0) {
    for (var i = 0; i < albumInfo.tags.tag.length; i++) {
      tags += albumInfo.tags.tag[i].name;
      if (i < albumInfo.tags.tag.length - 1) {
        tags += ', ';
      }
    }
  } else {
    tags = 'N/A';
  }
  genreHeader.innerHTML = "Genre: " + tags;
  div.appendChild(genreHeader);
  content.appendChild(div);
  var tracksHeader = document.createElement('h3');
  tracksHeader.innerHTML = 'Tracks';
  content.appendChild(tracksHeader);
  var trackList = document.createElement('div');
  if (tracks.track.length !== 0) {
    var list = document.createElement('ol');
    for (var i = 0; i < tracks.track.length; i++) {
      var item = document.createElement('li');
      item.className = 'listItem';
      var audio = document.createElement('a');
      audio.setAttribute('href', tracks.track[i].url);
      audio.setAttribute('title', 'Play on Last.fm');
      audio.className = 'track';
      audio.innerHTML = tracks.track[i].name;
      item.appendChild(audio);
      list.appendChild(item);
    }
    trackList.appendChild(list);
  }
  content.appendChild(trackList);
};