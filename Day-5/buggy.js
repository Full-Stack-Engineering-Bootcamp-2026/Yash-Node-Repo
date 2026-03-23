function calculateTotal(prices) {
  let total = 0;

  for (let i = 0; i <= prices.length-1; i++) { // we should iterate till length-1 because we arrays support 0-based indexing
    total += prices[i];
  }
  return total;
}
console.log(calculateTotal([10, 20, 30]));