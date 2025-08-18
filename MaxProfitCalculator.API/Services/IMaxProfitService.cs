namespace MaxProfitCalculator.API.Services;

public interface IMaxProfitService
{
    decimal CalculateMaxProfit(decimal[] prices);
}
