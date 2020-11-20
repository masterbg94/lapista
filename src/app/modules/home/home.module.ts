import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';

import { HomeComponent } from './pages/home.component';

/**
 * This is Home application module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
