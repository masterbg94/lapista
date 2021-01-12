import {NgModule} from '@angular/core';
import {CartRoutingModule} from './cart.routing.module';
import {CartComponent} from './pages/cart.component';
import {CommonModule} from '@angular/common';
import {OrderFormModule} from '../../core/components/order-form/order-form.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CartRoutingModule, CommonModule, OrderFormModule]
})
export class CartModule {
}
