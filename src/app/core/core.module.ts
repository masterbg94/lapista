import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';

/**
 * The core module is used to hold all root-level providers.
 * It should only be imported in the AppModule (Application Root Module).
 *
 * @since 1.0.0
 */
@NgModule({
  // Place all forRoot() imports here
  imports: [CommonModule, RouterModule],
  // Place all services/providers/injection tokens here
  providers: [
    // Provide your app wide services here
    ProductService,
  ],
  declarations: [ToolbarComponent, FooterComponent, SingleItemComponent],
  exports: [ToolbarComponent, FooterComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the root module only'
      );
    }
  }
}
