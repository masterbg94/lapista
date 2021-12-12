import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LapistaProductsComponent} from './pages/lapista-products.component';
import {LapistaProductsRoutingModule} from './lapista-products.routing.module';
import {ProductDetailImageModule} from '../../core/components/product-detail-image/product-detail-image.module';
import {ProductDetailTextModule} from '../../core/components/product-detail-text/product-detail-text.module';

/**
 * This is application module for LaPista shoes only
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
@NgModule({
    declarations: [LapistaProductsComponent],
    imports: [
        CommonModule,
        LapistaProductsRoutingModule,
        ProductDetailImageModule,
        ProductDetailTextModule
    ]
})
export class LapistaProductsModule {
}
