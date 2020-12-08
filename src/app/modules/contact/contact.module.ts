import {NgModule} from '@angular/core';
import {ContactComponent} from './pages/contact.component';
import {ContactRoutingModule} from './contact.routing.module';
import {ContactFormModule} from '../../core/components/contact-form/contact-form.module';

@NgModule({
  imports: [ContactRoutingModule, ContactFormModule],
  declarations: [ContactComponent]
})
export class ContactModule {
}
