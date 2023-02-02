import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

// ANGULAR MATERIAL //
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    FormsModule,
    
  ],
  exports: [
    TableComponent,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class PrincipalModule { }
