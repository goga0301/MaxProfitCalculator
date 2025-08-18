# MaxProfitCalculator Web Frontend

This is the Angular-based frontend application for the MaxProfitCalculator.

## Prerequisites

1. Install Node.js and npm:
   - Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)
   - This will also install npm (Node Package Manager)

2. Install Angular CLI:
   ```bash
   npm install -g @angular/cli
   ```

3. Install project dependencies:
   ```bash
   cd MaxProfitCalculator.Web
   npm install
   ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
MaxProfitCalculator.Web/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── price-input/
│   │   │   └── price-chart/
│   │   ├── services/
│   │   │   └── max-profit.service.ts
│   │   ├── models/
│   │   │   └── max-profit.model.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.module.ts
│   ├── assets/
│   └── environments/
└── package.json
```

## Next Steps

1. Install prerequisites as mentioned above
2. Run `ng serve` to start the development server
3. The API endpoint is configured to use `https://localhost:7125/api/maxprofit` by default
