import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaxProfitRequest, MaxProfitResponse } from '../models/max-profit.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaxProfitService {
  private apiUrl = `${environment.apiUrl}/api/maxprofit`;

  constructor(private http: HttpClient) { }

  calculateMaxProfit(prices: number[]): Observable<MaxProfitResponse> {
    const request: MaxProfitRequest = { prices };
    return this.http.post<MaxProfitResponse>(this.apiUrl, request);
  }
}
