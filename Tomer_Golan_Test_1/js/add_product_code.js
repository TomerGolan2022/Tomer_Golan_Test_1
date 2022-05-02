let productsList = []

let addproduct = (name, price, category, image, list) => {
    // push to array'

    let productObject = { name, price, category, image }

    if (name.length == 0 || price.length == 0 || image.length == 0) {
        alert("Please fill in all required fields"); return false
    } else if (price <= 0 ){
        alert("Price can not be lower than 0"); return false
    } else {
        Form.innerHTML = ``
        display.innerHTML = ``
        table.innerHTML = ``
        list.push(productObject)
        console.log("Add product")
        // clear the form
        clearForm()
        // message
        alert(`Product number ${list.length} added to cart`)
    }
}

let showList = (list) => {
    // clear the form
    clearForm()
    // message
    display.innerHTML = ``
    table.innerHTML = ``
    if (list.length > 0) {
        display.innerHTML = `<h1>The cart:</h1>`
        for (let index = 0; index < list.length; index++) {
            table.innerHTML += `
    <div class="col">
        <div class="card text-white bg-dark mb-3">
            <div class="card-body">
            <h5 class="card-title">${list[index].category}</h5>
            </div>
            <img src=${list[index].image} style="width: 200px" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${list[index].name}</h3>
                    <p class="card-text">Price: ${list[index].price} NIS</p>
                    <button onclick="removeFromList(${index})" class="btn btn-danger">remove</button>  
                </div>
        </div>
    </div>
    `
        }
        console.log(list)
    }
    else {
        alert("zero products");
        console.log("zero products")
    }
}

function removeFromList(ind) {
    productsList.splice(ind, 1);
    showList(productsList)
    console.log("product removed")
}

function clearCart() {
    productsList = []
    alert("Cart cleared");
    table.innerHTML = ``
    console.log("Cart cleared")
    clearForm()
    showList(productsList)
}


function clearForm() {
    Form.innerHTML = `<h1>Add product</h1>
        <br>
        product: <input id="productName" value="">
        <br><br>
        price: <input id="productPrice" type="number" value="">
        <br><br>
        <label for="productCategory">Category: </label>
        <select id="productCategory">
            <option value="Drinks">Drinks</option>
            <option value="Meat">Meat</option>
            <option value="Dairy">Dairy</option>
            <option value="Snacks">Snacks</option>
            <option value="Basic">Basic</option>
        </select>
        <br><br>
        image url: <input id="productImage" value="">
        <br><br>
        <button
            onclick="addproduct(productName.value, productPrice.value, productCategory.value, productImage.value, productsList)"
            class="btn btn-success">Add
            product</button>
        <button onclick="showList(productsList)" class="btn btn-secondary">show Cart</button>
        <button onclick="clearCart()" class="btn btn-danger">Clear cart</button>
        <br><br>`
}