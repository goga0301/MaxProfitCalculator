import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header class="header">
        <h1>MaxProfit Calculator</h1>
        <p>Calculate the maximum profit from a series of stock prices</p>
      </header>

      <app-price-input></app-price-input>
      <app-price-chart></app-price-chart>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      text-align: center;
      margin-bottom: 40px;
    }

    .header h1 {
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .header p {
      color: #7f8c8d;
      font-size: 1.2em;
    }
  `]
})
export class AppComponent {
  title = 'MaxProfit Calculator';
}
