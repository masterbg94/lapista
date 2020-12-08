import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './pages/contact.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ContactRoutingModule {

}
