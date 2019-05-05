function profitMargin(purchase, sell) {
  let profit = sell - purchase;
  let profitMargin = profit / sell * 100;
  console.log(`profit Margin: ${profitMargin}%`);
  return profitMargin;
}

function profitPercentage(purchase, sell) {
  let profit = sell - purchase;
  let percentage = profit / purchase * 100;
  console.log(`Profit % ${percentage}`);
}
profitMargin(100, 2800);
profitPercentage(100, 2800);
