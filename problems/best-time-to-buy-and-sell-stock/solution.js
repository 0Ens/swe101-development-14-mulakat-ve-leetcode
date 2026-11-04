export function maxProfit(prices){
    let min_value = Infinity;
    let max_profit = 0;
    for (let x=0; x <= prices.length-1; x++){

        if ( min_value > prices[x]){
            min_value = prices[x];

        }
        if ( max_profit < prices[x] - min_value){
            max_profit = prices[x] - min_value
        }
    }

    return max_profit 

    
}
