/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];
  prices.forEach((item) => {
    if (item < min) {
      min = item;
    } else {
      const p = item - min;
      if (p > profit) profit = p;
    }
  });
  console.log(profit);
};

maxProfit([7,6,5,4,3,2]);
