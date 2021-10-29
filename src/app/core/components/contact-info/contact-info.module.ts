import {NgModule} from '@angular/core';
import {ContactInfoComponent} from './contact-info.component';
import {TranslateModule} from '@ngx-translate/core';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    declarations: [ContactInfoComponent],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDf0Z-oUxKPN65T17S_6eLWwyVc74UW4-A',
        }),
        TranslateModule
    ],
    exports: [ContactInfoComponent]
})
export class ContactInfoModule {
}
