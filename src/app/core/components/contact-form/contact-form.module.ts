import {NgModule} from '@angular/core';
import {ContactFormComponent} from './contact-form.component';
import {CustomMaterialModule} from '../../../modules/custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CustomMaterialModule,
        ReactiveFormsModule,
        TranslateModule
    ],
  exports: [ContactFormComponent],
  declarations: [ContactFormComponent]
})
export class ContactFormModule {

}
