import { NgModule } from '@angular/core';
import { HomeFourImagesComponent } from './home-four-images.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeFourImagesComponent],
  imports: [
    RouterModule
  ],
  exports: [HomeFourImagesComponent],
})
export class HomeFourImagesModule {}
