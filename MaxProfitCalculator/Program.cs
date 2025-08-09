using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;

// Set up dependency injection and logging
var serviceProvider = new ServiceCollection()
    .AddLogging(builder =>
    {
        builder.AddConsole();
        builder.SetMinimumLevel(LogLevel.Debug);
    })
    .BuildServiceProvider();

var logger = serviceProvider.GetRequiredService<ILogger<Program>>();

List<int> prices = [5, 5, 2, 5, 5, 7, 9, 1, 5, 6];

logger.LogInformation("Starting profit calculation with {count} prices", prices.Count);
var profit = MaxProfitHelper.maxProfit(prices, logger);
logger.LogInformation("Calculation complete. Maximum profit: {profit}", profit);

public class MaxProfitHelper
{
    public static int maxProfit(List<int> stockPrices, ILogger logger)
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

        logger.LogInformation("Initial minimum price: {min}", min);

        for (int i = 1; i < stockPrices.Count; i++)
        {
            int stockPrice = stockPrices[i];
            logger.LogDebug("Processing price at index {index}: {price}", i, stockPrice);

            if(stockPrice - min > maxProfit)
            {
                maxProfit = stockPrice - min;
                logger.LogInformation("New maximum profit found: {profit} (buying at {min}, selling at {price})", 
                    maxProfit, min, stockPrice);
            }

            if(stockPrice < min)
            {
                logger.LogDebug("New minimum price found: {price} (old min: {oldMin})", stockPrice, min);
                min = stockPrice;
            }
        }

        logger.LogInformation("Calculation complete. Final maximum profit: {profit}", maxProfit);
        return maxProfit;
    }
}