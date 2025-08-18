import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-price-chart',
  template: `
    <div class="chart-container">
      <canvas id="priceChart"></canvas>
    </div>
  `,
  styles: [`
    .chart-container {
      width: 100%;
      max-width: 800px;
      margin: 20px auto;
      height: 400px;
    }
  `]
})
export class PriceChartComponent implements OnChanges {
  @Input() prices: number[] = [];
  @Input() buyIndex: number = -1;
  @Input() sellIndex: number = -1;

  private chart: Chart | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['prices'] || changes['buyIndex'] || changes['sellIndex']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = document.getElementById('priceChart') as HTMLCanvasElement;
    if (!ctx) return;

    const labels = Array.from({ length: this.prices.length }, (_, i) => `Day ${i + 1}`);
    const backgroundColor = Array(this.prices.length).fill('rgba(54, 162, 235, 0.2)');
    const borderColor = Array(this.prices.length).fill('rgba(54, 162, 235, 1)');

    if (this.buyIndex >= 0) {
      backgroundColor[this.buyIndex] = 'rgba(75, 192, 192, 0.2)';
      borderColor[this.buyIndex] = 'rgba(75, 192, 192, 1)';
    }

    if (this.sellIndex >= 0) {
      backgroundColor[this.sellIndex] = 'rgba(255, 99, 132, 0.2)';
      borderColor[this.sellIndex] = 'rgba(255, 99, 132, 1)';
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Stock Price',
          data: this.prices,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: (context: any) => {
                let label = context.dataset.label || '';
                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += `$${context.parsed.y}`;
                }
                if (context.dataIndex === this.buyIndex) {
                    label += ' (Buy Point)';
                }
                if (context.dataIndex === this.sellIndex) {
                    label += ' (Sell Point)';
                }
                return label;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + value;
              }
            }
          }
        }
      }
    });
  }
}
