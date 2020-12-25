import {Component} from '@angular/core';

@Component({
  selector: 'app-main-layout-component',
  template: '<app-toolbar></app-toolbar><router-outlet></router-outlet><app-footer></app-footer>'
})
export class MainLayoutComponent {
}
