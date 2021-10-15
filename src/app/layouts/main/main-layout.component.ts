import {Component} from '@angular/core';

@Component({
  selector: 'app-main-layout-component',
  template: '<app-toolbar></app-toolbar><div class="main" style="padding-top: 40px"><router-outlet ></router-outlet></div><app-footer></app-footer>'
})
export class MainLayoutComponent {
}
