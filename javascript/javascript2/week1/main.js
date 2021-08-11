console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const itemList = document.querySelector("ul");

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    let title = document.createElement("li");
    let price = document.createElement("span");
    let rating = document.createElement("span");

    // create an li
    title.innerHTML = products[i].name;
    price.innerHTML = "Price: " + products[i].price;
    rating.innerHTML = "Rating: " + products[i].rating;

    //Append the li to the ul
    itemList.appendChild(title);
    //Append the span to the title
    title.appendChild(price);
    title.appendChild(rating);
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details
