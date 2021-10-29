import { NgModule } from '@angular/core';
import { ContactComponent } from './pages/contact.component';
import { ContactRoutingModule } from './contact.routing.module';
import { ContactFormModule } from '../../core/components/contact-form/contact-form.module';
import { AgmCoreModule } from '@agm/core';
import {TranslateModule} from '@ngx-translate/core';
import {ContactInfoModule} from '../../core/components/contact-info/contact-info.module';

@NgModule({
    imports: [
        ContactRoutingModule,
        ContactFormModule,
        TranslateModule,
        ContactInfoModule,
    ],
  declarations: [ContactComponent],
})
export class ContactModule {}
