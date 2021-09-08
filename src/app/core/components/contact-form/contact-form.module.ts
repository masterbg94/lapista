import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ContactFormComponent} from './contact-form.component';

import {TranslateModule} from '@ngx-translate/core';
import {CustomMaterialModule} from '../../../modules/custom-material.module';

@NgModule({
    imports: [
        CustomMaterialModule,
        ReactiveFormsModule,
        TranslateModule,
        CommonModule
    ],
    exports: [ContactFormComponent],
    declarations: [ContactFormComponent]
})
export class ContactFormModule {

}
