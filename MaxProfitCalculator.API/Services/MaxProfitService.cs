using Microsoft.Extensions.Logging;

namespace MaxProfitCalculator.API.Services;

public class MaxProfitService : IMaxProfitService
{
    private readonly ILogger<MaxProfitService> _logger;

    public MaxProfitService(ILogger<MaxProfitService> logger)
    {
        _logger = logger;
    }

    public decimal CalculateMaxProfit(decimal[] prices)
    {
        if (prices == null || prices.Length < 2)
        {
            _logger.LogWarning("Invalid input: Array is null or has less than 2 elements");
            throw new ArgumentException("Price array must contain at least 2 elements");
        }

        decimal minPrice = prices[0];
        decimal maxProfit = 0;
        int buyDay = 0;
        int sellDay = 0;
        int currentBuyDay = 0;

        for (int i = 1; i < prices.Length; i++)
        {
            if (prices[i] < minPrice)
            {
                minPrice = prices[i];
                currentBuyDay = i;
            }
            else
            {
                decimal currentProfit = prices[i] - minPrice;
                if (currentProfit > maxProfit)
                {
                    maxProfit = currentProfit;
                    buyDay = currentBuyDay;
                    sellDay = i;
                }
            }
        }

        _logger.LogInformation(
            "Calculated max profit: {MaxProfit}. Buy day: {BuyDay}, Sell day: {SellDay}",
            maxProfit, buyDay + 1, sellDay + 1);

        return maxProfit;
    }
}
