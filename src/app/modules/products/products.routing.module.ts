import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

/**
 * Represents the Home Application Routing Module.
 *
 * This module sets up Home routes for the application as well
 * as exports Angular RouterModule to be avilable in
 * modules that import this module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
