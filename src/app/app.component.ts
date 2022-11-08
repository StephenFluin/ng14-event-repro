import { Component } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'event2-repro';
  constructor(router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(n => {})
  }
}
``