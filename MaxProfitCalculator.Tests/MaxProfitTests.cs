using System.Collections.Generic;
using Xunit;
using MaxProfitCalculator;

namespace MaxProfitCalculator.Tests
{
    public class MaxProfitTests
    {
        [Theory]
        [InlineData(new int[] {5, 5, 2, 5, 5, 7, 9, 1, 5, 6}, 7)]
        [InlineData(new int[] {7, 1, 5, 3, 6, 4}, 5)]
        [InlineData(new int[] {7, 6, 4, 3, 1}, 0)]
        [InlineData(new int[] {1, 2, 3, 4, 5}, 4)]
        public void MaxProfit_ReturnsExpectedResult(int[] prices, int expected)
        {
            var priceList = new List<int>(prices);
            int result = MaxProfitHelper.maxProfit(priceList);
            Assert.Equal(expected, result);
        }
    }
}
