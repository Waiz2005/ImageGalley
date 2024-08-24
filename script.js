let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const thumbnails = document.querySelectorAll('.thumbnails img');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('selected', i === index);
  });
  currentIndex = index;
}

function prevImage() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  showImage(currentIndex);
}

function selectImage(index) {
  showImage(index);
}

// Initialize the gallery by showing the first image
showImage(currentIndex);
