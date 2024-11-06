//* Array of painting IDs 
//? Array of painting pieces
const artPaintingItems = [
  { id: 1, type: "p", name: 'Avocados', artist: 'Elias Wrenford', price: 399, imgSrc: '../Stock/p1.jpg' , story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 2, type: "p", name: 'Sunset', artist: 'Selene Verano', price: 499, imgSrc: '../Stock/p2.jpg' , story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 3, type: "p", name: 'Future', artist: 'Caius Bellamy', price: 699, imgSrc: '../Stock/p3.jpg' , story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 4, type: "p", name: 'Grass', artist: 'Marielle Fontane', price: 999, imgSrc: '../Stock/p4.jpg', story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies." },
  { id: 5, type: "p", name: 'Simplicity', artist: 'Juno Sylvestre', price: 299, imgSrc: '../Stock/p5.jpg' , story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 6, type: "p", name: 'Fox', artist: 'Theodore Loxley', price: 199, imgSrc: '../Stock/p6.jpg' , story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
];

//? Array of sculpture pieces
const artSculptureItems = [
  { id: 1, type: "s", name: 'T-Pose', artist: 'Isolde Virelli', price: 1199, imgSrc: '../Stock/s1.jpg', story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 2, type: "s", name: 'Old Dog', artist: 'Dorian Kael', price: 1799, imgSrc: '../Stock/s2.jpg', story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 3, type: "s", name: 'Futuristic Hand', artist: 'Amara St. Clair', price: 4899, imgSrc: '../Stock/s3.jpg', story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 4, type: "s", name: 'Angelic Author', artist: 'Lucian Moreau', price: 3299, imgSrc: '../Stock/s4.jpg', story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 5, type: "s", name: 'Heavenly Angel', artist: 'Ophelia Valente', price: 1999, imgSrc: '../Stock/s5.jpg',story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 6, type: "s", name: 'Angel of Death', artist: 'Rowan Devereaux', price: 2499, imgSrc: '../Stock/s6.jpg', story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies."},
  { id: 7, type: "s", name: 'Cursed Protector', artist: 'Thalia Mercier', price: 899, imgSrc: '../Stock/s7.jpg', story:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros orci, ac iaculis mauris lacinia vitae. Maecenas a ipsum sed tortor posuere pretium et ut nisl. Pellentesque sit amet condimentum lorem, sed tempor elit. Mauris vestibulum semper odio, et placerat turpis iaculis et. Aenean congue diam nec sem placerat, nec rutrum nibh ultricies." },
];




//* Function to copy the ID when the share button is clicked
function copyID(id) {
  navigator.clipboard.writeText(id).then(() => {
  alert(`Copied ID: ${id}`);
  });
}

//*Send Data view
function goBuy(id) {
  localStorage.clear;
  localStorage.setItem("buy_id", id);
  window.location.href = "view.html";
}

//* Function to shuffle the array
var shouldShuffle = true;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}



//* Function to dynamically generate gallery elements
function gallery() {
  const galleryDiv = document.getElementById('galleryDiv');

  // Clear existing content in galleryDiv
  galleryDiv.innerHTML = '';

  // Combine both painting and sculpture items into one array
  const combinedArtItems = [...artPaintingItems, ...artSculptureItems];

  // Shuffle the combined array
  if (shouldShuffle) {
    shuffleArray(combinedArtItems);
  }

  combinedArtItems.forEach(item => {
      // Create the main gallery element div
      const galleryElement = document.createElement('div');
      galleryElement.classList.add('galleryElement');
      galleryElement.id = `img-${item.id}`;

      // Set the background image via inline style
      galleryElement.style.backgroundImage = `url(${item.imgSrc})`;

      // Add inner content with art info (overlay)
      
      //onclick="goBuy('${item.type + item.id}')"
      galleryElement.innerHTML = `
          <div class="galleryElementHover">
              <div class="artPrice" onclick="goBuy('${item.type + item.id}')" >Buy <br> $${item.price}</div>
              <div class="artShare">
                  <button type="button" onclick="copyID('${item.type + item.id}')">
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

//* Function to dynamically generate gallery elements
function paintings() {
    const galleryDiv = document.getElementById('galleryDiv');

    // Clear existing content in galleryDiv
    galleryDiv.innerHTML = '';

    // Shuffle the array
    if (shouldShuffle) {
      shuffleArray(artPaintingItems);
    }

    artPaintingItems.forEach(item => {
      // Create the main gallery element div
    const galleryElement = document.createElement('div');
    galleryElement.classList.add('galleryElement');
    galleryElement.id = `img-${item.id}`;

      // Set the background image via inline style
    galleryElement.style.backgroundImage = `url(${item.imgSrc})`;

      // Add inner content with art info (overlay)
    galleryElement.innerHTML = `
        <div class="galleryElementHover">
              <div class="artPrice" onclick="goBuy('${item.type + item.id}')" >Buy <br> $${item.price}</div>
          <div class="artShare">
            <button type="button" onclick="copyID('${item.type + item.id}')">
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

//* Function to dynamically generate sculpture gallery elements
function sculptures() {
  const galleryDiv = document.getElementById('galleryDiv');

  // Clear existing content in galleryDiv
  galleryDiv.innerHTML = '';

  // Shuffle the array
  if (shouldShuffle) {
    shuffleArray(artSculptureItems);
  }

  artSculptureItems.forEach(item => {
      // Create the main gallery element div
      const galleryElement = document.createElement('div');
      galleryElement.classList.add('galleryElement');
      galleryElement.id = `img-${item.id}`;

      // Set the background image via inline style
      galleryElement.style.backgroundImage = `url(${item.imgSrc})`;

      // Add inner content with art info (overlay)
      galleryElement.innerHTML = `
          <div class="galleryElementHover">
              <div class="artPrice" onclick="goBuy('${item.type + item.id}')" >Buy <br> $${item.price}</div>
              <div class="artShare">
                  <button type="button" onclick="copyID('${item.type + item.id}')">
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

/** SearchBar */
const artSculptureItems_list = artSculptureItems.map(({ id, type }) => `${type}${id}`);
const artPaintingItems_list = artPaintingItems.map(({ id, type }) => `${type}${id}`);
console.log(artSculptureItems_list[0])

function SearchBar(){
  let s_id = document.getElementById("SrcBar").value;
  const admin = "admin"

  if(s_id == "s"){
    sculptures();
    document.getElementById("SrcBar").value = "";
    return;
  }
  else if(s_id == "p")
  {
    paintings();
    document.getElementById("SrcBar").value = "";
    return;
  }

  if(s_id[0] == "s")
  {
    if(artSculptureItems_list.includes(s_id))
    {
      goBuy(s_id);
      return;
    }
    else
    {
      alert(`Not found "${s_id}" id`)
      return;
    }
  }
  else if(s_id[0] == "p")
  {
    if(artPaintingItems_list.includes(s_id))
      {
        goBuy(s_id);
        return;
      }
      else
      {
        alert(`Not found "${s_id}" id`)
        return;
      }
  }



  else if(s_id == admin){
    window.location.href = "upload.html";
    return
  }
  else
  {
    alert(`Not found "${s_id}" id`)
    return;
  }
}