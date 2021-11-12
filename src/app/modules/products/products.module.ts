import { NgModule } from '@angular/core';
import { ProductsComponent } from './pages/products.component';
import { ProductsRoutingModule } from './products.routing.module';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

/**
 * This is Home application module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
@NgModule({
  imports: [ProductsRoutingModule, CommonModule, TranslateModule],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
