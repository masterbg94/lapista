import {NgModule} from '@angular/core';
import {ProductDetailTextComponent} from './product-detail-text.component';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../../../modules/custom-material.module';
import {TranslateModule} from '@ngx-translate/core';
import {SizeTableModalComponent} from '../size-table-modal/size-table-modal.component';

@NgModule({
  declarations: [ProductDetailTextComponent, SizeTableModalComponent],
    imports: [
        CommonModule,
        CustomMaterialModule,
        TranslateModule
    ],
  exports: [ProductDetailTextComponent]
})
export class ProductDetailTextModule {

}
