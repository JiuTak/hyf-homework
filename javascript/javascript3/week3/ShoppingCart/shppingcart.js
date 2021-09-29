const body = document.querySelector("body");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    //  should add a product to the products array.
    this.products.push(product);
  }

  removeProduct(product) {
    // should remove a product from the products array.
    const findIndex = this.products.indexOf(product);
    if (findIndex > -1) {
      this.products.splice(product, 1);
    }
  }

  searchProduct(productName) {
    // should return an array of product that match the productName parameter
    const searchItems = this.products.filter((item) =>
      item.name.toLowerCase().includes(productName.toLowerCase())
    );
    return searchItems;
  }

  getTotal() {
    // should get the total price of the products in the shoppingcart.
    const products = this.products;

    const result = products
      .map((prod) => prod.price)
      .reduce((total, next) => total + next, 0);

    console.log(result);
  }

  renderProducts() {
    // should render the products to html. You decide what to show and how.
    const h1 = document.createElement("h1");
    h1.innerHTML = "Products";
    body.append(h1);

    this.products.forEach((item) => {
      const itemName = document.createElement("h3");
      const itemPrice = document.createElement("h5");
      itemName.innerHTML = item.name;
      body.append(itemName);
      itemPrice.innerHTML = item.price;
      body.append(itemPrice);
    });
  }

  getUser() {
    // should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1
    const randomNumbers = Math.floor(Math.random() * 10);
    fetch(`https://jsonplaceholder.typicode.com/users/${randomNumbers}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const aplWatch = new Product("Apple watch SE", 3500);
const newPhone = new Product("Apple 13", 20000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(aplWatch);
shoppingCart.addProduct(newPhone);
shoppingCart.getTotal();

console.log(shoppingCart);

console.log(shoppingCart.searchProduct("Apple"));

shoppingCart.renderProducts();
shoppingCart.getUser();
