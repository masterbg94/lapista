import {NgModule} from '@angular/core';
import {ContactFormComponent} from './contact-form.component';
import {CustomMaterialModule} from '../../../modules/custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  exports: [ContactFormComponent],
  declarations: [ContactFormComponent]
})
export class ContactFormModule {

}
