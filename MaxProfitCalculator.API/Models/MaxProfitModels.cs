namespace MaxProfitCalculator.API.Models;

public class MaxProfitRequest
{
    public decimal[] Prices { get; set; } = Array.Empty<decimal>();
}

public class MaxProfitResponse
{
    public decimal MaxProfit { get; set; }
    public string? ErrorMessage { get; set; }
}
