import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StatisticService {
  constructor() {}

  loadStatistic(): Observable<{data: number[]}> {
    return of({
      data: this.randomData(),
    });
  }

  private randomData(): number[] {
    const iteration = Math.floor(this.randomNumber(5, 10));
    const data = [];
    for (let i = 0; i <= iteration; i++) {
      const min = this.randomNumber(1, 20);
      const max = this.randomNumber(25, 40);
      data.push(
        this.randomNumber(min, max).toFixed(1),
      );
    }
    return data;
  }

  private randomNumber(min, max): number {
    return Math.random() * (max - min) + min;
  }
}
