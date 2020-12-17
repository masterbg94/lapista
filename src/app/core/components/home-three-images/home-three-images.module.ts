import { NgModule } from '@angular/core';
import { HomeThreeImagesComponent } from './home-three-images.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [HomeThreeImagesComponent],
  declarations: [HomeThreeImagesComponent],
})
export class HomeThreeImagesModule {}
