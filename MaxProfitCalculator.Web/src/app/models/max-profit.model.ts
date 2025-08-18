export interface MaxProfitRequest {
    prices: number[];
}

export interface MaxProfitResponse {
    maxProfit: number;
    errorMessage?: string;
}
