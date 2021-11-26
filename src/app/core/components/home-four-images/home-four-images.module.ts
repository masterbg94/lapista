import { NgModule } from '@angular/core';
import { HomeFourImagesComponent } from './home-four-images.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [HomeFourImagesComponent],
    imports: [
        RouterModule,
        TranslateModule,
        CommonModule
    ],
  exports: [HomeFourImagesComponent],
})
export class HomeFourImagesModule {}
