import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
})
export class CustomMaterialModule {}
