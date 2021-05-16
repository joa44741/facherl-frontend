import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';
import { TopProduct } from './types/top-product.type';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  getTopProducts(): Observable<TopProduct[]> {
    const topProducts: TopProduct[] = [
      { productNr: '19583', productName: 'Flecht-Korb', totalUnitsSold: 4 },
      { productNr: '59300', productName: 'Topflappen', totalUnitsSold: 2 },
      { productNr: '23463', productName: 'Marmelade', totalUnitsSold: 2 }
    ];

    console.log('get top products:', topProducts);

    return of(topProducts).pipe(delay(1000));
  }
}
