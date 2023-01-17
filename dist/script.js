const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.querySelector(".btn");

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/86a048d9952b32d8e016ea24/latest/${currency_one}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const exchangeRate = data.conversion_rates;
      amountEl_two.value = (
        exchangeRate[currency_two] * amountEl_one.value
      ).toFixed(2);
    })
    .catch((err) => console.log(err));
}
// Event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", function () {
  const currency = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = currency;
  calculate();
});

// calculate();
