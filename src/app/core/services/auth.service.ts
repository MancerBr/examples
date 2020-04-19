import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor() {}

  login(email: string): Observable<{access_token: string}> {
    return of<{access_token: string}>({
      access_token: '_' + Math.random().toString(36).substr(2, 9),
    });
  }
}
