const cartArray = JSON.parse (localStorage.getItem('checkoutarray'))
const itemsDiv = document.querySelector ('#items-div')
const h6 = document.querySelector ('h6')
let totalAmount = 0;


function renderCart () {
    
    if (cartArray.length === 0) {
        h6.innerHTML = `No Items in the Cart`
    }else {
        cartArray.map ((item , index) => {
        
            itemsDiv.innerHTML += `
            <div class="card bg-light" style="width: 18rem;">
            <div class="card-body d-flex flex-column row-gap-1 justify-content-center align-items-start">
            <h5 class="card-title">Model: ${cartArray[index].brand} ${cartArray[index].model}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Quantity: <button class="bg-primary border-0 rounded text-center text-white fs-5 px-2 pb-1" onclick="addQuantity(${index})">+</button> <span>${cartArray[index].quantity}</span> <button class="bg-primary border-0 rounded text-center text-white fs-5 px-2 pb-1" onclick="subtractQuantity(${index})">-</button></h6>
            <h6>Price: ${cartArray[index].price*cartArray[index].quantity}</h6>
            <button class="btn btn-danger" onclick="deleteItem(${index})">delete</button>
            </div>
            </div>
            `
            
            totalAmount += cartArray[index].price * cartArray[index].quantity
            h6.innerHTML = `Your total bill is PKR ${totalAmount}`
        })
    }
}

renderCart()

function deleteItem (index){ 
    cartArray.splice (index , 1)
    itemsDiv.innerHTML = ''
    totalAmount = 0;
    renderCart()
    console.log (cartArray)
    localStorage.setItem ('checkoutarray' , JSON.stringify(cartArray))
}

function addQuantity(index) {
    cartArray[index].quantity += 1
    itemsDiv.innerHTML = ''
    totalAmount = 0
    renderCart()
    localStorage.setItem ('checkoutarray' , JSON.stringify(cartArray))
}

function subtractQuantity(index) {
    if (cartArray[index].quantity > 0) {
        cartArray[index].quantity -= 1
        itemsDiv.innerHTML = ''
        totalAmount = 0
        renderCart()
        localStorage.setItem ('checkoutarray' , JSON.stringify(cartArray))
    }
}

