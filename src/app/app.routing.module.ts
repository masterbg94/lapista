import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './layouts/main/main-layout.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthGuard} from './core/guards/auth.guard';
import {ErrorPageComponent} from './core/components/error-page/error-page.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
                data: {title: 'La pista home'}
            },
            {
                path: 'products',
                loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
                data: {title: 'Lapista products'}
            },
            {
                path: 'products/:category',
                loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
                data: {title: 'La pista category'}
            },
            // Za identita modele
            {
                path: 'product/:id',
                loadChildren: () => import('./modules/product-detail/product-detail.module').then(m => m.ProductDetailModule),
                data: {title: 'La pista single product'}
            },
            // Za lapista modele
            {
                path: 'lapista/:colorid',
                loadChildren: () => import('./modules/lapista-products/lapista-products.module').then(m => m.LapistaProductsModule),
                data: {title: 'La pista single product'}
            },
            {
                path: 'about',
                loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule),
                data: {title: 'La pista about'}
            },
            {
                path: 'contact',
                loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
                data: {title: 'La pista contact'}
            },
            {
                path: 'cart',
                loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule),
                data: {title: 'La pista cart'}
            }
        ]
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        data: {title: 'La Pista - Admin panel'},
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
            }
        ],
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
        data: {title: 'La Pista - Login to panel'},
    },
    {
        path: '**',
        component: ErrorPageComponent,
        // data: {title: 'La Pista - Error page'},
        // children: [
        //     {
        //         path: '',
        //         component: ErrorPageComponent
        //     }
        // ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
