import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  pieChartOptions: ChartOptions
  pieChartLabels: Label[]
  pieChartData: number[]
  pieChartType: ChartType
  pieChartLegend: boolean
  pieChartPlugins = [pluginDataLabels];
  pieChartColors: { backgroundColor: string[] }[];

  @Input() labels: [string[]]
  @Input() values: number[]
  @Input() title: string

  ngOnInit(): void {
    this.pieChartColors = [
      {
        backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(255,0,0,0.3)'],
      },
    ];
    this.pieChartOptions = {
      responsive: true,
      legend: {
        position: 'top',
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label;
          },
        },
      }
    };
    this.pieChartLabels = this.labels;
    this.pieChartData = this.values;
    this.pieChartType = 'pie';
    this.pieChartLegend = true;
  }

 // Pie


}
