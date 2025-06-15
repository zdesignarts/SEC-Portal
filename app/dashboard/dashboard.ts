import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Chart } from './chart/chart';

const NgModule = {
    declarations: [],
  };

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatGridListModule, MatIconModule, MatTableModule, MatListModule, CommonModule, Chart],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.sass']
})
export class Dashboard {
  
}
