// get image links to images
// > .albumId .id .title .url .thumbnailUrl
    var xhr = new XMLHttpRequest()
    xhr.open(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      true
      )
    xhr.send()

    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) {
        return
      }

      if (xhr.status === 200) {
        console.log('images status: 200')
        images = JSON.parse(xhr.responseText)
      } else {
        console.log('err', xhr.responseText)
      }

// insert images to carousel
var list = document.getElementById('carousel_ul')
for (var i = 0; i < images.length; i++) {
  var li = document.createElement('li')
  li.innerHTML = '<a class="link" data-url="'+images[i].url+'" href="#"><img src="'+images[i].thumbnailUrl+'"></a>'
  list.appendChild(li)
}

document.getElementById('parent').style.display = 'flex';

// conf
var width = 150; // image width
var count = 1; // image steps
var position = 0; // start position

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

// button actions
carousel.querySelector('.prev').onclick = function() {
  position = Math.min(position + width * count, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};


// show big picture overlay
  var links = document.querySelectorAll('.link');
  var overlay = document.getElementById('overlay');
  var overlayImg = document.getElementById('overlayImg');
  for (var i = 0; i < links.length; i++) {
  	let link = links[i];
    link.onclick = function(evt) {
        let imgpath = link.getAttribute('data-url');
        overlayImg.src = imgpath;
        overlay.style.display = 'block';
    }
  }

// hide overlay
overlay.onclick = function(evt) {
  overlay.style.display = 'none';
}
overlayImg.onclick = function(evt) {
  overlay.style.display = 'none';
}

    }
