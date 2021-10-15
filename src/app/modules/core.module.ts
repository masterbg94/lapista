import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToolbarComponent } from '../core/components/toolbar/toolbar.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductService } from '../core/services/product.service';
import { DataService } from '../core/services/data.service';
import { MainLayoutComponent } from '../layouts/main/main-layout.component';
import {AdminLayoutComponent} from '../layouts/admin/admin-layout.component';
import {AuthenticationService} from '../core/services/authentication.service';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';

/**
 * The core module is used to hold all root-level providers.
 * It should only be imported in the AppModule (Application Root Module).
 *
 * @since 1.0.0
 */
@NgModule({
  // Place all forRoot() imports here
  // Translate module here to prevent loading app module, but can add in app module also
    imports: [CommonModule, RouterModule, TranslateModule, MatIconModule],
  // Place all services/providers/injection tokens here
  providers: [
    // Provide your app wide services here
    ProductService,
    DataService,
    AuthenticationService
  ],
  declarations: [ToolbarComponent, FooterComponent, MainLayoutComponent, AdminLayoutComponent],
  exports: [ToolbarComponent, FooterComponent, MainLayoutComponent, AdminLayoutComponent],
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
