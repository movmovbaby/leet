/**
 * @param {number[]} prices
 * @return {number}
 */
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing
a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/*
на каждом шаге ищем минимум, и считаем профит */
/*
var maxProfit = function (prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}; */

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    price = prices[i];
    maxProfit = Math.max(price - minPrice, maxProfit);
    minPrice = Math.min(price, minPrice);
  }
  return maxProfit;
};

prices = [7, 17, 4, 3, 111];
let ans = maxProfit(prices);
console.log(ans);
