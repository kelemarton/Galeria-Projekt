let id = localStorage.getItem("buy_id");

const artPaintingItems = [
    { id: 1, type: "p", name: 'Avocados', artist: 'Elias Wrenford', price: 499, imgSrc: '../Stock/p1.jpg' },
    { id: 2, type: "p", name: 'Sunset', artist: 'Selene Verano', price: 399, imgSrc: '../Stock/p2.jpg' },
    { id: 3, type: "p", name: 'Future', artist: 'Caius Bellamy', price: 699, imgSrc: '../Stock/p3.jpg' },
    { id: 4, type: "p", name: 'Grass', artist: 'Marielle Fontane', price: 699, imgSrc: '../Stock/p4.jpg' },
    { id: 5, type: "p", name: 'Simplicity', artist: 'Juno Sylvestre', price: 699, imgSrc: '../Stock/p5.jpg' },
    { id: 6, type: "p", name: 'Fox', artist: 'Theodore Loxley', price: 699, imgSrc: '../Stock/p6.jpg' },
];

//? Array of sculpture pieces
const artSculptureItems = [
  { id: 1, type: "s", name: 'T-Pose', artist: 'Isolde Virelli', price: 499, imgSrc: '../Stock/s1.jpg' },
  { id: 2, type: "s", name: 'Old Dog', artist: 'Dorian Kael', price: 399, imgSrc: '../Stock/s2.jpg' },
  { id: 3, type: "s", name: 'Futuristic Hand', artist: 'Amara St. Clair', price: 699, imgSrc: '../Stock/s3.jpg' },
  { id: 4, type: "s", name: 'Angelic Author', artist: 'Lucian Moreau', price: 699, imgSrc: '../Stock/s4.jpg' },
  { id: 5, type: "s", name: 'Heavenly Angel', artist: 'Ophelia Valente', price: 699, imgSrc: '../Stock/s5.jpg' },
  { id: 6, type: "s", name: 'Angel of Death', artist: 'Rowan Devereaux', price: 699, imgSrc: '../Stock/s6.jpg' },
  { id: 7, type: "s", name: 'Cursed Protector', artist: 'Thalia Mercier', price: 699, imgSrc: '../Stock/s7.jpg' },
];

let viewIMG = document.getElementById("viewIMG");
console.log(id);

/*
if(id[0] == "s")
{
    artSculptureItems.forEach(element => {
        if(element.id == id[1])
        {
            console.log(element.imgSrc)
            viewIMG.alt = element.imgSrc

        }

    });
}
else if(id[0] == "p")
{

}*/