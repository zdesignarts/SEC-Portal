import { Component, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexResponsive
} from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, NgApexchartsModule],
  templateUrl: './chart.html',
  styleUrls: ['./chart.sass']
})
export class ChartComponent {
  @ViewChild('chart') chart: any;

  // Linienchart (Sales)
  salesSeries: ApexAxisChartSeries = [
    {
      name: 'Sales',
      data: [10, 41, 35, 51, 49, 62, 69]
    }
  ];
  salesChart: ApexChart = { type: 'line', height: 350 };
  salesXAxis: ApexXAxis = { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] };
  salesStroke: ApexStroke = { curve: 'smooth' };
  salesTitle: ApexTitleSubtitle = { text: 'Sales Overview' };

  // Donutchart (Regionen)
  regionSeries: ApexNonAxisChartSeries = [44, 55, 13, 33];
  regionChart: ApexChart = { type: 'donut' };
  regionLabels: string[] = ['USA', 'Europe', 'Asia', 'Other'];
  regionResponsive: ApexResponsive[] = [
    {
      breakpoint: 480,
      options: {
        chart: { width: 200 },
        legend: { position: 'bottom' }
      }
    }
  ];
}
