import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {filter, take} from 'rxjs/operators';
import {Router} from '@angular/router';

import * as fromAuthSelectors from '../../core/store/selectors/auth.selectors';
import { login } from '../../core/store/actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  myForm: FormGroup;
  userEmail = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.subscribeSuccessLogin();
    this.myForm = new FormGroup({
      userEmail: this.userEmail,
    });
  }

  ngOnInit() {}

  login() {
    this.store.dispatch(login({ email: this.myForm.value.userEmail}));
  }

  subscribeSuccessLogin() {
    this.store
      .pipe(
        select(fromAuthSelectors.selectAuthToken),
        filter(item => !!item),
        take(1),
      ).subscribe(() => {
        this.router.navigate(['/home']);
      });
  }

}
