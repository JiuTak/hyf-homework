const body = document.getElementsByTagName("body");
const h1 = document.getElementById("whos-shopping-cart");
const itemList = document.getElementById("item-list");
const cartTotal = document.getElementById("cart-total");
const searchInput = document.getElementById("product-search-input");

let cartTotalPrice = 0;

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    // Assuming dkr as default currency

    fetch(
      `https://v6.exchangerate-api.com/v6/a534b80e56a63f91e332441c/latest/${currency}`
    )
      .then((response) => response.json())
      .then((data) => {
        const allCurrencies = data.conversion_rates[currency];
        const changeMoney = this.price * allCurrencies;
        printOutValues(changeMoney, currency);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function printOutValues(changeMoney, currency) {
  const valuePrintOut = document.createElement("h6");
  valuePrintOut.innerText = `${Math.ceil(changeMoney)} ${currency}`;
}

const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("KRW"));

const figs = new Product("fig", 30);
console.log(figs.convertToCurrency("KRW"));

const plantMilk = new Product("soy milk", 20);
console.log(plantMilk.convertToCurrency("KRW"));

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // should add a product to the products array.
    this.products.push(product);
  }

  removeProduct(product) {
    // should remove a product from the products array
    const findIndex = this.products.indexOf(product);
    if (findIndex > -1) {
      this.products.splice(product, 1);
    }
  }

  searchProduct(productName) {
    // should return an array of product that match the productName parameter
    const filteredItems = this.products.filter((item) =>
      item.name.toLowerCase().includes(productName)
    );
    return filteredItems;
  }

  getTotal() {
    // should get the total price of the products in the shoppingcart
    const items = this.products;

    const result = items
      .map((itemPrice) => itemPrice.price)
      .reduce((total, prev) => total + prev, 0);
    return result;
  }

  renderProducts(showProduct) {
    // should render the products to html. You decide what to show and how

    showProduct.forEach((product) => {
      const productList = document.createElement("ul");
      const productAdd = document.createElement("button");
      productList.innerHTML = `<li><h3>${product.name}</h3> <h4>${product.price} dkk</h4></li> `;
      productAdd.innerHTML = `Add Product`;
      itemList.append(productList);
      productList.append(productAdd);

      productAdd.addEventListener("click", () => {
        cartTotalPrice += product.price;
        cartTotal.innerText = cartTotalPrice;
      });
    });
  }

  getRandomUser() {
    // should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1
    // I made random user everytime I refresh the page
    const randomNumbers = Math.floor(Math.random() * 10 + 1);
    fetch(`https://jsonplaceholder.typicode.com/users/${randomNumbers}`)
      .then((response) => response.json())
      .then((data) => {
        const userName = data.name;
        h1.innerHTML = `Welcome! \n${userName}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  searchInputDisplay() {
    searchInput.addEventListener("input", (e) => {
      const compareItem = e.target.value.toLowerCase();
      const checkAllItems = this.products.filter((item) =>
        item.name.toLowerCase().match(compareItem)
      );
      itemList.innerHTML = "";
      shoppingCart.renderProducts(checkAllItems);
    });
  }
}
const shoppingCart = new ShoppingCart();
const showAllProduct = shoppingCart.products;

const flatscreen = new Product("flat-screen", 5000);
const iphone = new Product("iPhone 13", 50000);
const appleWatch = new Product("Apple watch SE", 3000);
const ipad = new Product("iPad pro", 50000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(appleWatch);
shoppingCart.addProduct(ipad);

console.log(shoppingCart.getTotal());
shoppingCart.getRandomUser();
shoppingCart.searchProduct();
shoppingCart.searchInputDisplay();

shoppingCart.renderProducts(showAllProduct);
