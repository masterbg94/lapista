import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LapistaProductsComponent} from './pages/lapista-products.component';

const ROUTES: Routes = [
    {
        path: '',
        component: LapistaProductsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class LapistaProductsRoutingModule {
}
