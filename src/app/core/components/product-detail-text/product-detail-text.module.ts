import {NgModule} from '@angular/core';
import {ProductDetailTextComponent} from './product-detail-text.component';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../../../modules/custom-material.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [ProductDetailTextComponent],
    imports: [
        CommonModule,
        CustomMaterialModule,
        TranslateModule
    ],
  exports: [ProductDetailTextComponent]
})
export class ProductDetailTextModule {

}
