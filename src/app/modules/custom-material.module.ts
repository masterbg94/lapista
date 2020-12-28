import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectModule} from '@angular/material/select';
import {MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER} from '@angular/material/tooltip';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class CustomMaterialModule {}
