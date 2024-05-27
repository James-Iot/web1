const button = document.getElementById('next-button');
const bannerImage = document.querySelector('.banner img');

button.addEventListener('click', () => {
  bannerImage.src = "image2.jpg"; // Replace with the path to your second image
});
