import {NgModule} from '@angular/core';
import {OrderFormComponent} from './order-form.component';
import {FormsModule} from '@angular/forms';
import {CustomMaterialModule} from '../../../modules/custom-material.module';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [FormsModule, CustomMaterialModule],
  exports: [OrderFormComponent]
})
export class OrderFormModule {
}
