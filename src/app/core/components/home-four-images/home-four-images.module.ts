import { NgModule } from '@angular/core';
import { HomeFourImagesComponent } from './home-four-images.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [HomeFourImagesComponent],
    imports: [
        RouterModule,
        TranslateModule
    ],
  exports: [HomeFourImagesComponent],
})
export class HomeFourImagesModule {}
