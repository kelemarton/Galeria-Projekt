// Array of art pieces
const artItems = [
    { id: 1, name: 'Avocados', artist: 'Talented Guy', price: 499, imgSrc: '../Stock/p1.jpg' },
    { id: 2, name: 'Sunset', artist: 'Creative Mind', price: 399, imgSrc: '../Stock/p2.jpg' },
    { id: 3, name: 'Modern Sculpture', artist: 'Art Genius', price: 699, imgSrc: '../Stock/p3.jpg' },
    { id: 4, name: 'Modern Sculpture', artist: 'Art Genius', price: 699, imgSrc: '../Stock/p4.jpg' },
];

  // Function to dynamically generate gallery elements
function createGallery() {
    const galleryDiv = document.getElementById('galleryDiv');

    artItems.forEach(item => {
      // Create the main gallery element div
    const galleryElement = document.createElement('div');
    galleryElement.classList.add('galleryElement');
    galleryElement.id = `img-${item.id}`;

      // Set the background image via inline style
    galleryElement.style.backgroundImage = `url(${item.imgSrc})`;

      // Add inner content with art info (overlay)
    galleryElement.innerHTML = `
        <div class="galleryElementHover">
          <div class="artPrice">$${item.price}</div>
          <div class="artShare">
            <button type="button" onclick="copyID('${galleryElement.id}')">
              <img src="Images/share.png" alt="Share">
            </button>
          </div>
          <div class="artInfo">
            <div class="artInfoTitle">${item.name}</div>
            <div class="artInfoName">${item.artist}</div>
          </div>
        </div>
      `;

      // Append the element to the galleryDiv
    galleryDiv.appendChild(galleryElement);
    });
}

  // Function to copy the ID when the share button is clicked
function copyID(id) {
    navigator.clipboard.writeText(id).then(() => {
    alert(`Copied ID: ${id}`);
    });
}

  // Call the function to create the gallery on page load
createGallery();