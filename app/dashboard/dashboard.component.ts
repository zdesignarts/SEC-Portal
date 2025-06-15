import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ChartComponent } from './chart/chart';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatListModule,
    ChartComponent
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.sass']
})
export class DashboardComponent {
  // KPI Cards
  kpiList = [
    { icon: 'trending_up', title: 'Revenue', value: '$36,000', label: 'This Month' },
    { icon: 'group', title: 'Users', value: '2,345', label: 'New Signups' },
    { icon: 'shopping_cart', title: 'Orders', value: '843', label: 'Completed' },
    { icon: 'visibility', title: 'Page Views', value: '12.4K', label: 'Last 7 days' }
  ];

  // Top Products Table
  productColumns: string[] = ['name'];
  productData = [
    { name: 'Product A' },
    { name: 'Product B' },
    { name: 'Product C' }
  ];

  // Activity List
  activityList = [
    { icon: 'notifications', title: 'New Order', description: 'Order #1234 placed' },
    { icon: 'message', title: 'New Message', description: 'You received a message' }
  ];

  // Chart Data (Sales Overview)
  salesSeries: ApexAxisChartSeries = [
    {
      name: 'Sales',
      data: [10, 41, 35, 51, 49, 62, 69]
    }
  ];
  salesOptions: Partial<ApexChart & { xaxis: ApexXAxis; stroke: ApexStroke; title: ApexTitleSubtitle }> = {
    chart: { type: 'line', height: 350 },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    stroke: { curve: 'smooth' },
    title: { text: 'Sales Overview' }
  };

  // Chart Data (Region)
  regionSeries: ApexNonAxisChartSeries = [44, 55, 13, 33];
  regionOptions: Partial<ApexChart & { labels: string[]; responsive: ApexResponsive[] }> = {
    chart: { type: 'donut' },
    labels: ['USA', 'Europe', 'Asia', 'Other'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom' }
        }
      }
    ]
  };
}
