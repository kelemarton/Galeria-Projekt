let id = localStorage.getItem("buy_id");

if(id == undefined)
{
    window.location.href = "index.html";
}


const artPaintingItems = [
    { id: 1, type: "p", name: 'Avocados', artist: 'Elias Wrenford', price: 499, imgSrc: '../Stock/p1.jpg' , story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
    { id: 2, type: "p", name: 'Sunset', artist: 'Selene Verano', price: 399, imgSrc: '../Stock/p2.jpg' , story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
    { id: 3, type: "p", name: 'Future', artist: 'Caius Bellamy', price: 699, imgSrc: '../Stock/p3.jpg' , story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
    { id: 4, type: "p", name: 'Grass', artist: 'Marielle Fontane', price: 699, imgSrc: '../Stock/p4.jpg', story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
    { id: 5, type: "p", name: 'Simplicity', artist: 'Juno Sylvestre', price: 699, imgSrc: '../Stock/p5.jpg' , story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
    { id: 6, type: "p", name: 'Fox', artist: 'Theodore Loxley', price: 699, imgSrc: '../Stock/p6.jpg' , story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
];

//? Array of sculpture pieces
const artSculptureItems = [
  { id: 1, type: "s", name: 'T-Pose', artist: 'Isolde Virelli', price: 499, imgSrc: '../Stock/s1.jpg', story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
  { id: 2, type: "s", name: 'Old Dog', artist: 'Dorian Kael', price: 399, imgSrc: '../Stock/s2.jpg', story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
  { id: 3, type: "s", name: 'Futuristic Hand', artist: 'Amara St. Clair', price: 699, imgSrc: '../Stock/s3.jpg', story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
  { id: 4, type: "s", name: 'Angelic Author', artist: 'Lucian Moreau', price: 699, imgSrc: '../Stock/s4.jpg', story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
  { id: 5, type: "s", name: 'Heavenly Angel', artist: 'Ophelia Valente', price: 699, imgSrc: '../Stock/s5.jpg',story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
  { id: 6, type: "s", name: 'Angel of Death', artist: 'Rowan Devereaux', price: 699, imgSrc: '../Stock/s6.jpg', story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
  { id: 7, type: "s", name: 'Cursed Protector', artist: 'Thalia Mercier', price: 699, imgSrc: '../Stock/s7.jpg', story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
];


let creatorName = "";
let artName = "";
let artPrice = "";
let artStory = ""

if(id[0] == "s")
{ 
    artSculptureItems.forEach(element => { 
        if(element.id == id[1]) 
            { 
                creatorName = element.artist;
                artName = element.name;
                artPrice = element.price;
                artStory = element.story;
            } }); 
    } 
    else if(id[0] == "p") 
        {  
            artPaintingItems.forEach(element => { 
                if(element.id == id[1]) 
                    { 
                        creatorName = element.artist;
                        artName = element.name;
                        artPrice = element.price;
                        artStory = element.story;
                    } }); 
        }

console.log(id);
let imgName = "../Stock/"+id + ".jpg"


function viewDiv(){
    const viewBox = document.getElementById('viewBox');

let viewElement = document.createElement("div");
viewElement.innerHTML =`
    <div class="container">
<div class="left-card">
<img src="${imgName}"  alt="${imgName}" class="card-image">
</div>
<div class="right-section">
<div class="right-card"> 
    <p class="t2"> About</p>
    <p class="card-text" >Create by:  <br> <b><i>${creatorName}</b></i></p> 
    <p class="card-text" >Art name:  <br> <b><i>${artName}</b></i></p>
    <p class="card-text" >Art story:  <br> <b><i>${artStory}</b></i></p>
</div>
<div class="right-card">
    <p class="t2"> Price</p>
    <button onclick="goOrder()" class="card-button center">$ ${artPrice}</button>
</div>
</div>
</div>`



viewBox.append(viewElement)
}


function goOrder(){
    window.location.href = "order.html";
    
}

function copyID(id) {
    navigator.clipboard.writeText(id).then(() => {
    alert(`Copied ID: ${id}`);
    });
  }
