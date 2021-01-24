import {NgModule} from '@angular/core';
import {OrderFormComponent} from './order-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomMaterialModule} from '../../../modules/custom-material.module';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [
    FormsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
  exports: [OrderFormComponent],
})
export class OrderFormModule {}
