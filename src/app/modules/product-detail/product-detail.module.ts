import {NgModule} from '@angular/core';
import {ProductDetailComponent} from './pages/product-detail.component';
import {ProductDetailRoutingModule} from './product-detail.routing.module';
import {ProductDetailTextModule} from '../../core/components/product-detail-text/product-detail-text.module';
import {ProductDetailImageModule} from '../../core/components/product-detail-image/product-detail-image.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    ProductDetailRoutingModule,
    ProductDetailTextModule,
    ProductDetailImageModule,
    CommonModule,
  ],
})
export class ProductDetailModule {
}
