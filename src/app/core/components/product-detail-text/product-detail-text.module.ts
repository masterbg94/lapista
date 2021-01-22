import {NgModule} from '@angular/core';
import {ProductDetailTextComponent} from './product-detail-text.component';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../../../modules/custom-material.module';

@NgModule({
  declarations: [ProductDetailTextComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [ProductDetailTextComponent]
})
export class ProductDetailTextModule {

}
