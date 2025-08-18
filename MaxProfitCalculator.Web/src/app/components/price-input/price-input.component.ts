import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaxProfitService } from '../../services/max-profit.service';

@Component({
  selector: 'app-price-input',
  template: `
    <div class="price-input-container">
      <form [formGroup]="priceForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="prices">Stock Prices (comma-separated):</label>
          <input
            type="text"
            id="prices"
            formControlName="prices"
            class="form-control"
            placeholder="Enter prices (e.g., 7,1,5,3,6,4)"
          >
          <div *ngIf="priceForm.get('prices')?.errors?.['required'] && priceForm.get('prices')?.touched" class="error-message">
            Prices are required
          </div>
          <div *ngIf="priceForm.get('prices')?.errors?.['pattern']" class="error-message">
            Please enter valid numbers separated by commas
          </div>
        </div>
        <button type="submit" [disabled]="!priceForm.valid" class="btn btn-primary">
          Calculate Max Profit
        </button>
      </form>

      <div *ngIf="maxProfit !== null" class="result-container">
        <h3>Maximum Profit: ${{ maxProfit }}</h3>
      </div>

      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  `,
  styles: [`
    .price-input-container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-control {
      width: 100%;
      padding: 8px;
      margin-top: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .btn-primary {
      background-color: #007bff;
      color: white;
    }

    .btn:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    .error-message {
      color: #dc3545;
      margin-top: 5px;
      font-size: 0.9em;
    }

    .result-container {
      margin-top: 20px;
      padding: 15px;
      background-color: #f8f9fa;
      border-radius: 4px;
    }
  `]
})
export class PriceInputComponent implements OnInit {
  priceForm: FormGroup;
  maxProfit: number | null = null;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private maxProfitService: MaxProfitService
  ) {
    this.priceForm = this.fb.group({
      prices: ['', [
        Validators.required,
        Validators.pattern(/^(\d+(\.\d+)?,\s*)*\d+(\.\d+)?$/)
      ]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.priceForm.valid) {
      const pricesString = this.priceForm.get('prices')?.value;
      const prices = pricesString.split(',').map((p: string) => parseFloat(p.trim()));

      if (prices.length < 2) {
        this.errorMessage = 'Please enter at least 2 prices';
        return;
      }

      this.maxProfitService.calculateMaxProfit(prices).subscribe({
        next: (response) => {
          this.maxProfit = response.maxProfit;
          this.errorMessage = '';
        },
        error: (error) => {
          this.errorMessage = error.error?.errorMessage || 'An error occurred while calculating max profit';
          this.maxProfit = null;
        }
      });
    }
  }
}
