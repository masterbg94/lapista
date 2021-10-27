import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';

import { HomeComponent } from './pages/home.component';
import {HomeThreeImagesModule} from '../../core/components/home-three-images/home-three-images.module';
import {HomeFourImagesModule} from '../../core/components/home-four-images/home-four-images.module';
import {SliderModule} from '../../core/components/slider/slider.module';
import {TranslateModule} from '@ngx-translate/core';

/**
 * This is Home application module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
@NgModule({
    imports: [
        HomeRoutingModule,
        HomeThreeImagesModule,
        HomeFourImagesModule,
        SliderModule,
        TranslateModule
    ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
