import {NgModule} from '@angular/core';
import {AboutComponent} from './pages/about.component';
import {AboutRoutingModule} from './about.routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [AboutRoutingModule, TranslateModule],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {
}
