import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HomeService {
  constructor(private http: HttpClient) {}

  getSummary() {
    return this.http.get('https://api.covid19api.com/summary');
  }
}
