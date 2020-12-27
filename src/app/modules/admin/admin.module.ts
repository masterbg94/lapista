import { NgModule } from '@angular/core';

import { AdminComponent } from './pages/admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { CustomMaterialModule } from '../custom-material.module';
import {CommonModule} from '@angular/common';
import {CustomModalModule} from '../../core/components/custom-modal/custom-modal.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    CustomMaterialModule,
    CommonModule,
    CustomModalModule
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
