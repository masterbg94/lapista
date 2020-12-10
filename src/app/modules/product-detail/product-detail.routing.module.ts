import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from './pages/product-detail.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProductDetailComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
}) export class ProductDetailRoutingModule {
}
