import { NgModule } from '@angular/core';

import { AdminComponent } from './pages/admin.component';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [AdminRoutingModule],
  declarations: [AdminComponent],
})
export class AdminModule {}
