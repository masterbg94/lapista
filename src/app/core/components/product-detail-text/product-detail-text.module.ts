import {NgModule} from '@angular/core';
import {ProductDetailTextComponent} from './product-detail-text.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ProductDetailTextComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductDetailTextComponent]
})
export class ProductDetailTextModule {

}
