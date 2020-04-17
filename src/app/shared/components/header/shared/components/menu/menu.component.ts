import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import {MENU} from './menu.constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  readonly menu = MENU;
  currentUrl = '';

  constructor(private router: Router) {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });
  }

  ngOnInit() {
  }

  goToPage(page): void {
    this.router.navigate([`/${page}`]);
  }

}
