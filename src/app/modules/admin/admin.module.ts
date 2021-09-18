import { NgModule } from '@angular/core';

import { AdminComponent } from './pages/admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { CustomMaterialModule } from '../custom-material.module';
import {CommonModule} from '@angular/common';
import {CustomModalModule} from '../../core/components/custom-modal/custom-modal.module';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
    imports: [
        AdminRoutingModule,
        CustomMaterialModule,
        CommonModule,
        CustomModalModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
  declarations: [AdminComponent],
})
export class AdminModule {}
