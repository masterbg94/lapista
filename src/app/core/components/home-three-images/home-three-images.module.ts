import { NgModule } from '@angular/core';
import { HomeThreeImagesComponent } from './home-three-images.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        RouterModule,
        TranslateModule
    ],
  exports: [HomeThreeImagesComponent],
  declarations: [HomeThreeImagesComponent],
})
export class HomeThreeImagesModule {}
