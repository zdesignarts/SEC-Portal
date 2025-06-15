import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [],
  imports: [
    DashboardComponent,
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    NgApexchartsModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
