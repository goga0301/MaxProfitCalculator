// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

List<int> prices = [5, 5, 2, 5, 5, 7, 9, 1, 5, 6];

var profit = MaxProfitHelper.maxProfit(prices);

Console.WriteLine(profit);

public class MaxProfitHelper
{
    public static int maxProfit(List<int> stockPrices)
    {
        if (stockPrices == null)
        {
            throw new ArgumentNullException(nameof(stockPrices), "Stock prices list cannot be null.");
        }

        if (stockPrices.Count == 0)
        {
            throw new ArgumentException("Stock prices list cannot be empty.", nameof(stockPrices));
        }

        if (stockPrices.Count == 1)
        {
            return 0; // Can't make profit with just one price
        }

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
}
