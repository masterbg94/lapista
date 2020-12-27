import {NgModule} from '@angular/core';
import {CustomModalComponent} from './custom-modal.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomMaterialModule} from '../../../modules/custom-material.module';

@NgModule({
  declarations: [CustomModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CustomMaterialModule],
  exports: [CustomModalComponent]
})
export class CustomModalModule {
}
