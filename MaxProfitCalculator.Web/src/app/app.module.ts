import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PriceInputComponent } from './components/price-input/price-input.component';
import { PriceChartComponent } from './components/price-chart/price-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceInputComponent,
    PriceChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
