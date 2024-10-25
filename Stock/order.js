
let id = localStorage.getItem("buy_id");

if(id == " ")
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


function orderDiv(){
let orderPage = document.getElementById("orderBox");
let orderElement = document.createElement("div");
orderElement.innerHTML =
`    <div class="container">
        <div class="left-column">
            <div class="art-image-container">
                <img src="${imgName}" alt="${imgName}" class="art-image">
            </div>
            <div class="art-info">
                <div class="art-details">
                    <p class="t2 left">${artName}</h2>
                    <div class="metadata-item">
                        <div class="metadata-label">Artist</div>
                        <div class="metadata-value">${creatorName}</div>
                    </div>
                    <div class="metadata-item">
                        <div class="metadata-label">Art Name</div>
                        <div class="metadata-value">${artName}</div>
                    </div>
                    <hr>
                    <div class="metadata-item">
                        <div class="t2 price_text">Price</div>
                        <div class="t2 price_value"><b> $ ${artPrice}</b></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="right-column">
            <div class="payment-header">
                <h2>Payment Details</h2>
                <div class="price-tag">$499</div>
            </div>
            
            <div class="btn-group">
                <button class="btn btn-select active" data-type="domestic">Domestic Card</button>
                <button class="btn btn-select" data-type="international">International Card</button>
            </div>

            <form id="paymentForm">
                <div class="form-group">
                    <label for="cardName">Cardholder Name</label>
                    <input type="text" id="cardName" placeholder="Your Name" required>
                    <div class="error" id="nameError">Please enter a valid name</div>
                </div>

                <div id="domesticFields">
                    <div class="form-group">
                        <label for="cardNumber">Card Number</label>
                        <input type="text" id="cardNumber" placeholder="5321 1234 5678 9123" maxlength="19" required>
                        <div class="error" id="numberError">Please enter a valid card number</div>
                    </div>

                    <div class="card-info">
                        <div class="form-group">
                            <label for="expiry">Expiry Date</label>
                            <input type="text" id="expiry" placeholder="MM/YY" maxlength="5" required>
                            <div class="error" id="expiryError">Please enter a valid expiry date</div>
                        </div>

                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" placeholder="123" id="cvv" maxlength="4" required>
                            <div class="error" id="cvvError">Please enter a valid CVV</div>
                        </div>
                    </div>
                </div>

                <div id="internationalFields" style="display: none;">
                    <div class="form-group">
                        <label for="iban">IBAN Number</label>
                        <input type="text" placeholder="FR7630006000011234567890189" id="iban">
                        <div class="error" id="ibanError">Please enter a valid IBAN number</div>
                    </div>
                    <div class="form-group">
                        <label for="swift">SWIFT/BIC Code</label>
                        <input type="text" placeholder="AAAA-BB-CC-123" id="swift">
                        <div class="error" id="swiftError">Please enter a valid SWIFT/BIC code</div>
                    </div>
                </div>

                <button type="submit" class="btn submit-btn">Pay $ ${artPrice}</button>
            </form>
        </div>
    </div>`

    orderPage.append(orderElement)
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    const bankButtons = document.querySelectorAll('.btn-select[data-type]');
    const domesticFields = document.getElementById('domesticFields');
    const internationalFields = document.getElementById('internationalFields');

    // Bank type selection
    bankButtons.forEach(button => {
        button.addEventListener('click', () => {
            bankButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const isInternational = button.dataset.type === 'international';
            domesticFields.style.display = isInternational ? 'none' : 'block';
            internationalFields.style.display = isInternational ? 'block' : 'none';
        });
    });

    // Card number formatting and validation
    const cardNumber = document.getElementById('cardNumber');
    cardNumber.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = value;
    });

    // Expiry date formatting
    const expiry = document.getElementById('expiry');
    expiry.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0,2) + '/' + value.slice(2);
        }
        e.target.value = value;
    });

    // IBAN formatting and validation
    const iban = document.getElementById('iban');
    iban.addEventListener('input', (e) => {
        let value = e.target.value.replace(/[^\dA-Z]/g, '').toUpperCase();
        value = value.replace(/(.{4})(?=.)/g, '$1 ');
        e.target.value = value;
    });

    // Form validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        document.querySelectorAll('.error').forEach(error => {
            error.style.display = 'none';
        });

        const isInternational = document.querySelector('.btn-select[data-type="international"]').classList.contains('active');

        if (isInternational) {
            // IBAN validation
            if (!validateIBAN(iban.value.replace(/\s/g, ''))) {
                document.getElementById('ibanError').style.display = 'block';
                isValid = false;
            }
            
            // SWIFT validation
            const swiftValue = document.getElementById('swift').value;
            if (!/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(swiftValue)) {
                document.getElementById('swiftError').style.display = 'block';
                isValid = false;
            }
        } else {
            // Card number validation (Luhn algorithm)
            const number = cardNumber.value.replace(/\s/g, '');
            if (!validateCardNumber(number)) {
                document.getElementById('numberError').style.display = 'block';
                isValid = false;
            }

            // Expiry validation
            const [month, year] = expiry.value.split('/');
            if (!validateExpiry(month, year)) {
                document.getElementById('expiryError').style.display = 'block';
                isValid = false;
            }

            // CVV validation
            const cvv = document.getElementById('cvv').value;
            if (!/^\d{3,4}$/.test(cvv)) {
                document.getElementById('cvvError').style.display = 'block';
                isValid = false;
            }
        }

        if (isValid) { //5127 8809 9999 9990
            startOrderAnimation();
        }
    });

    function validateCardNumber(number) {
        if (!/^\d{16}$/.test(number)) return false;
        
        let sum = 0;
        let isEven = false;
        
        for (let i = number.length - 1; i >= 0; i--) {
            let digit = parseInt(number[i]);
            
            if (isEven) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            
            sum += digit;
            isEven = !isEven;
        }
        
        return sum % 10 === 0;
    }

    function validateIBAN(iban) {
        // Basic IBAN format check
        const ibanRegex = /^[A-Z]{2}\d{2}[A-Z0-9]{4,35}$/;
        if (!ibanRegex.test(iban)) return false;

        // Convert IBAN to integer representation
        let number = iban.slice(4) + iban.slice(0, 4);
        let converted = '';
        for (let char of number) {
            if (/[0-9]/.test(char)) {
                converted += char;
            } else {
                converted += (char.charCodeAt(0) - 55).toString();
            }
        }

        // Validate checksum using mod-97
        let remainder = 0;
        for (let i = 0; i < converted.length; i++) {
            remainder = (remainder * 10 + parseInt(converted[i])) % 97;
        }

        return remainder === 1;
    }

    function validateExpiry(month, year) {
        const now = new Date();
        const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
        return expiry > now;
    }
});





//* ORDER ANIMATION

function startOrderAnimation() {
    startAnimation()
    const modal = document.getElementById('orderModal');
    const items = document.querySelectorAll('.order-item');
    const cart = document.querySelector('.shopping-cart');
    const checkmark = document.querySelector('.checkmark');
    const checkmarkPath = document.querySelector('.checkmark-path');

    modal.classList.add('active');

    items.forEach((item, index) => {
      item.style.top = '50%';
      item.style.left = '50%';
      item.style.transform = 'translate(-50%, -50%)';
      item.style.opacity = '0';
    });

    setTimeout(() => {
      items.forEach((item, index) => {
        item.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        item.style.opacity = '1';
        
        const angle = (index * Math.PI * 2) / items.length;
        const radius = Math.min(80, window.innerWidth * 0.15);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });
    }, 500);

    setTimeout(() => {
      cart.style.transition = 'opacity 0.5s';
      cart.style.opacity = '1';

      items.forEach((item) => {
        item.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        item.style.transform = 'translate(-50%, -50%) scale(0)';
      });
    }, 2000);

    setTimeout(() => {
      cart.style.transition = 'all 0.5s';
      cart.style.opacity = '0';
      cart.style.transform = 'translate(-50%, -50%) scale(0)';

      checkmark.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      checkmark.style.transform = 'translate(-50%, -50%) scale(1)';
      
      checkmarkPath.style.transition = 'stroke-dashoffset 0.8s ease-in-out';
      checkmarkPath.style.strokeDashoffset = '0';
    }, 3000);

    setTimeout(() => {
      modal.classList.remove('active');
      
      setTimeout(() => {
        items.forEach(item => {
          item.style.transition = 'none';
          item.style.opacity = '0';
        });
        cart.style.transition = 'none';
        cart.style.opacity = '0';
        cart.style.transform = 'translate(-50%, -50%) scale(1)';
        checkmark.style.transition = 'none';
        checkmark.style.transform = 'translate(-50%, -50%) scale(0)';
        checkmarkPath.style.strokeDashoffset = '100';
      }, 500);
    }, 4500);

    setTimeout(() => {
        window.location.href = "index.html";
      }, 4600);

  }



  function startAnimation(){
    let orderPage = document.getElementById("orderBox");
    orderPage.innerHTML = " ";
    let orderElement = document.createElement("div");
    orderElement.innerHTML =
`
    <link rel="stylesheet" href="CSS Files/order_animation.css">

<div class="modal" id="orderModal">
<div class="modal-content">
  <div id="animationContainer">
        <div class="order-item" style="background-color: #b72740"></div>
        <div class="order-item" style="background-color: #841b2d"></div>
        <div class="order-item" style="background-color: #ec3150"></div>
        <div class="order-item" style="background-color: #a5243a"></div>

    <svg class="shopping-cart" viewBox="0 0 100 100">
      <path class="cart-path" d="M20,30 h60 l-10,40 h-40 l-10,-40" />
      <path class="cart-path" d="M30,70 v10" />
      <path class="cart-path" d="M60,70 v10" />
      <path class="cart-path" d="M30,40 l30,0" />
      <path class="cart-path" d="M30,50 l30,0" />
    </svg>

    <svg class="checkmark" viewBox="0 0 100 100">
      <path class="checkmark-path" d="M20,50 l20,20 l40,-40" />
    </svg>
  </div>
</div>
</div>
`
    
        orderPage.append(orderElement)
    }

