// Select all videos and mute buttons
const videos = document.querySelectorAll('.productVideo');
const muteButtons = document.querySelectorAll('.muteButton');

// Add event listeners for each video and its corresponding button
muteButtons.forEach((button, index) => {
  const video = videos[index]; // Get the corresponding video for the button

  button.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      button.textContent = 'Mute';
    } else {
      video.muted = true;
      button.textContent = 'Unmute';
    }
  });
});


// Function to update the main product image when a thumbnail is clicked
function updateMainImage(imageSrc) {
  // Get the main image element by its ID
  const mainImage = document.getElementById('main-product-image');
  
  // Set the source of the main image to the clicked thumbnail's image source
  mainImage.src = imageSrc;
}
