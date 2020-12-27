import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login.component';
import { LoginRoutingModule } from './login.routing.module';
import { CustomMaterialModule } from '../custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [LoginRoutingModule, CustomMaterialModule, ReactiveFormsModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
