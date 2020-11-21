import { NgModule } from '@angular/core';
import { ProductsComponent } from './pages/products.component';
import { ProductsRoutingModule } from './products.routing.module';

/**
 * This is Home application module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
@NgModule({
  imports: [ProductsRoutingModule],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
