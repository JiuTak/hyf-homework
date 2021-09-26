const body = document.querySelector("body");
const h1 = document.getElementById("whos-shopping-cart");
const resultArea = document.querySelector("result-area");
const searchInput = document.getElementById("product-search-input");
const searchbutton = document.getElementById("search-button");

window.onload = () => {
  shoppingCart.getUser();
};

// let userInput = "";
let cartTotalPrice = 0;

// searchbutton.addEventListener("click", () => {
//   itemList.innerHTML = "";
//   userInput = searchInput.value;

//   if (userInput !== "") {
//     // shoppingCart.searchProduct(userInput);
//     shoppingCart.renderProducts(userInput);
//   }
// });

const h2 = document.createElement("h2");
h2.innerHTML = "Product List";
body.append(h2);

const h4 = document.createElement("h4");
h4.innerHTML = `Total price : ${cartTotalPrice} `;
body.append(h4);

const itemList = document.querySelector("#item-list");
body.append(itemList);

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    // Assuming dkr as default currency
    // try {
    //   fetch(
    //     `https://v6.exchangerate-api.com/v6/a534b80e56a63f91e332441c/latest/DKK`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       const allCurrencies = data.conversion_rates[currency];
    //       console.log(allCurrencies);
    //       const changeMoney = this.price * allCurrencies;
    //       console.log(Math.ceil(changeMoney) + " won");
    //     });
    // } catch (err) {
    //   console.log(err);
  }
}

searchInput.addEventListener("input", () => {
  const searchItem = searchInput.value;
  shoppingCart.searchProduct(searchItem);

  shoppingCart.renderProducts(searchItem);
});

class ShoppingCart {
  constructor() {
    this.products = [];
    // this.cartProduct = [];
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
    const filteredItems = this.products.filter((item) =>
      item.name.toLowerCase().includes(productName.toLowerCase())
    );
    return filteredItems;
  }

  getTotal() {
    // should get the total price of the products in the shoppingcart.
    const products = this.products;

    const result = products
      .map((prod) => prod.price)
      .reduce((total, next) => total + next, 0);

    return result;
  }

  renderProducts() {
    // should render the products to html. You decide what to show and how.

    this.products.forEach((item) => {
      const resultLine = document.createElement("ul");
      const addButton = document.createElement("button");
      // const minusButton = document.createElement("button");

      resultLine.innerHTML = `${item.name} <br> ${item.price}`;
      // minusButton.innerHTML = ` remove `;
      addButton.innerHTML = `Add cart`;

      itemList.append(resultLine);
      itemList.append(addButton);
      // resultLine.append(minusButton);

      addButton.addEventListener("click", (addProducts) => {
        console.log(addProducts);
        const addItem = this.cartProduct.push(addProducts);
        console.log(addItem);
        cartTotalPrice += item.price;
        h4.innerHTML = cartTotalPrice;
      });

      /* Tried to make minus function too but then it should link with exact item and price.
      Tried make new array(line 63) and push the added product and remove the price from that.
       */

      // minusButton.addEventListener("click", () => {
      //   if (cartTotalPrice <= 0) {
      //     h4.innerHTML = `You have no item `;
      //   } else {
      //     cartTotalPrice -= item.price;
      //     h4.innerHTML = cartTotalPrice;
      //   }
      // });
    });
  }

  getUser() {
    // should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1
    const randomNumbers = Math.floor(Math.random() * 10 + 1);
    fetch(`https://jsonplaceholder.typicode.com/users/${randomNumbers}`)
      .then((response) => response.json())
      .then((data) => {
        const userName = data.name;
        h1.innerHTML = `Welcome! \n${userName}`;
      })
      .then(() => {
        this.renderProducts();
      })
      .then(() => {
        const showTotal = this.getTotal();
        // console.log(`total is ... ${showTotal}`);
      });
  }
}

// const plant = new Product("plant", 50);
// console.log(plant.convertToCurrency("KRW"));

// const figs = new Product("fig", 30);
// console.log(figs.convertToCurrency("KRW"));

// const plantMilk = new Product("soy milk", 20);
// console.log(plantMilk.convertToCurrency("KRW"));

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const aplWatch = new Product("Apple watch SE", 3500);
const newPhone = new Product("Apple 13", 50000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(aplWatch);
shoppingCart.addProduct(newPhone);

// shoppingCart.getTotal();
// console.log(shoppingCart);
// console.log(shoppingCart.searchProduct("Apple"));

// shoppingCart.renderProducts();
// shoppingCart.getUser();
