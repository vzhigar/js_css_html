function searchTopView(response) {
  var content = document.querySelector('.content');
  var arr = response.artists === undefined ? response.results.artistmatches.artist : response.artists.artist;
  var isSearch = response.artists == undefined;
  for (var i = 0; i < arr.length; i++) {
    var artist = arr[i];
    var div = document.createElement('div');
    div.className = 'container';
    content.appendChild(div);
    var image = document.createElement('img');
    var imageSource = artist.image[3]['#text'];
    image.className = 'label';
    image.setAttribute('src', imageSource);
    image.setAttribute('alt', artist.name);
    image.setAttribute('title', 'Artist information');
    image.setAttribute('onclick', "artistInfo(" + "'" + artist.name + "'" + ")");
    div.appendChild(image);
    var artistName = document.createElement('h3');
    artistName.className = 'searchName';
    artistName.innerHTML = artist.name;
    div.appendChild(artistName);
  }
  var center = document.createElement('div');
  center.className = 'center';
  var pagination = document.createElement('ul');
  pagination.className = 'pagination';
  var maxPages = 10;
  for (var i = 0; i < maxPages; i++) {
    var page = document.createElement('li');
    var link = document.createElement('a');
    link.setAttribute('href', '#');
    link.id = i;
    var num = i + 1;
    if (!isSearch) {
      link.setAttribute('onclick', 'getTop(' + num + ')');
    } else {
      link.setAttribute('onclick', 'searchArtist(' + num + ')');
    }
    link.innerHTML = i + 1;
    page.appendChild(link);
    pagination.appendChild(page);
  }
  center.appendChild(pagination);
  content.appendChild(center);
};