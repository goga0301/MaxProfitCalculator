// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

List<int> prices = [5, 5, 2, 5, 5, 7, 9, 1, 5, 6];

var profit = maxProfit(prices);

Console.WriteLine(profit);

static int maxProfit(List<int> stockPrices)
{

    
    var maxProfit = 0;
    var min = stockPrices[0];

    for (int i = 1; i < stockPrices.Count; i++)
    {
        int stockPrice = stockPrices[i];

        if(stockPrice - min > maxProfit)
        {
            maxProfit = stockPrice - min;
        }

        if(stockPrice < min)
        {
            min = stockPrice;
        }

        Console.WriteLine();
        Console.WriteLine("-----------");
        Console.WriteLine($"Price {stockPrice}");
        Console.WriteLine($"Min {min}");
        Console.WriteLine($"MaxProfit {maxProfit}");

    }

    return maxProfit;
}