const itemsArrayofObjects= [{
    brand: 'Samsung',
    model: 'S20',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Xiomi',
    model: 'note10',
    ram: 4,
    rom: 64,
    camera: '10 megapixel',
    price: 15000
},
{
    brand: 'Infinix',
    model: 'z10',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000
},
{
    brand: 'Tecno',
    model: 'spark10',
    ram: 12,
    rom: 512,
    camera: '25 megapixel',
    price: 15000
},
{
    brand: 'Iphone',
    model: '14',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000
},
{
    brand: 'Oppo',
    model: 'F11',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Vivo',
    model: 'y20',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000
},
{
    brand: 'Samsung',
    model: 's50',
    ram: 50,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000
}]

const itemsDiv = document.querySelector ('#items-div')
let checkoutArray;
const checkout_btn = document.querySelector ('#checkout-button')

let getDatafromLocalStorage = JSON.parse(localStorage.getItem ('checkoutarray'))
if (getDatafromLocalStorage === null) {
    checkoutArray = []
}
else {
    checkoutArray = getDatafromLocalStorage
}


itemsArrayofObjects.map ((item , index) => {
    itemsDiv.innerHTML += `
    <div class="card bg-light" style="width: 18rem;">
    <div class="card-body d-flex flex-column row-gap-1 justify-content-center align-items-start">
    <h5 class="card-title"> ${itemsArrayofObjects[index].brand} ${itemsArrayofObjects[index].model}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Price: Rs. ${itemsArrayofObjects[index].price} /-</h6>
    <button onclick="addItemsToCart(${index})" class="btn btn-primary">Add to Cart</button>
    </div>
    </div>
    `
})

function emptyCart() {
    localStorage.removeItem('checkoutarray')
    checkoutArray = []
}


function addItemsToCart (i) {
    if (checkoutArray.includes(itemsArrayofObjects[i])) {
        itemsArrayofObjects[i].quantity += 1
    }
    else {
        itemsArrayofObjects[i].quantity = 1
        checkoutArray.push (itemsArrayofObjects[i])
    }
}

function GotoCart () {
    localStorage.setItem ('checkoutarray' , JSON.stringify(checkoutArray))
    window.location = ('cart.html')
}