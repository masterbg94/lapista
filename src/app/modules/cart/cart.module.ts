import {NgModule} from '@angular/core';
import {CartRoutingModule} from './cart.routing.module';
import {CartComponent} from './pages/cart.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [CartComponent],
  imports: [CartRoutingModule, CommonModule]
})
export class CartModule {
}
