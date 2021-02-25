import {NgModule} from '@angular/core';
import {CartRoutingModule} from './cart.routing.module';
import {CartComponent} from './pages/cart.component';
import {CommonModule} from '@angular/common';
import {OrderFormModule} from '../../core/components/order-form/order-form.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [CartComponent],
    imports: [CartRoutingModule, CommonModule, OrderFormModule, TranslateModule]
})
export class CartModule {
}
