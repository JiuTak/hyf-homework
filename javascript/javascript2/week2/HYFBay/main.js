console.log("Script loaded");

const products = getAvailableProducts();

const productsUl = document.querySelector("section.products ul");

const productList = document.getElementById("productsList");

function renderProducts(products) {
  //ensure list is empty
  deleteChild();

  products.forEach((product) => {
    const li = document.createElement("li");
    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}

//deletes all children in our list
function deleteChild() {
  let child = productsUl.lastElementChild;
  while (child) {
    productsUl.removeChild(child);
    child = productsUl.lastElementChild;
  }
}

renderProducts(products);

/* =======================================================================
                          Searching for products
========================================================================== */
//when search input field adding, the products should be updated

const body = document.querySelector("body");

const searchBox = document.querySelector("#searchInput"); // put id for the searchbox

let userInput = searchBox.addEventListener("keyup", searchFunction);

function searchFunction(event) {
  const targetValue = event.target.value.toLowerCase();
  const compareValue = products.filter((product) =>
    product.name.toLowerCase().includes(targetValue)
  );
  renderProducts(compareValue);
}

/* =======================================================================
                   Filter products based on max price
========================================================================== */
const maxPrice = document.getElementById("maxPriceBox");

let userInputPrice = maxPrice.addEventListener("input", filterByMax);

function filterByMax(event) {
  const maxValue = Number(event.target.value);
  if (maxValue) {
    const compareValue = products.filter(
      (product) => product.price <= maxValue
    );
    renderProducts(compareValue);
  } else {
    renderProducts(products);
  }
}
