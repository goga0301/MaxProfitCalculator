using MaxProfitCalculator.API.Models;
using MaxProfitCalculator.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaxProfitCalculator.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MaxProfitController : ControllerBase
{
    private readonly IMaxProfitService _maxProfitService;
    private readonly ILogger<MaxProfitController> _logger;

    public MaxProfitController(IMaxProfitService maxProfitService, ILogger<MaxProfitController> logger)
    {
        _maxProfitService = maxProfitService;
        _logger = logger;
    }

    [HttpPost]
    public ActionResult<MaxProfitResponse> CalculateMaxProfit(MaxProfitRequest request)
    {
        try
        {
            if (request.Prices == null || request.Prices.Length < 2)
            {
                return BadRequest(new MaxProfitResponse
                {
                    ErrorMessage = "Price array must contain at least 2 elements"
                });
            }

            var maxProfit = _maxProfitService.CalculateMaxProfit(request.Prices);
            
            return Ok(new MaxProfitResponse
            {
                MaxProfit = maxProfit
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error calculating max profit");
            return BadRequest(new MaxProfitResponse
            {
                ErrorMessage = "Error calculating maximum profit"
            });
        }
    }
}
