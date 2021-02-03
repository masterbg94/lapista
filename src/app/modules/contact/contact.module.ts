import { NgModule } from '@angular/core';
import { ContactComponent } from './pages/contact.component';
import { ContactRoutingModule } from './contact.routing.module';
import { ContactFormModule } from '../../core/components/contact-form/contact-form.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    ContactRoutingModule,
    ContactFormModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDf0Z-oUxKPN65T17S_6eLWwyVc74UW4-A',
    }),
  ],
  declarations: [ContactComponent],
})
export class ContactModule {}
