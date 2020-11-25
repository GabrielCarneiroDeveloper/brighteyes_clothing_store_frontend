import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  public barChartOptions: ChartOptions;
  public barChartLabels: Label[];
  public barChartType: ChartType
  public barChartLegend: boolean
  public barChartPlugins: any[]
  public barChartData: ChartDataSets[]
  
  @Input() input: {label: string, data: any[]}
  @Input() title: string

  ngOnInit(): void {
    this.barChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    };
    this.barChartLabels = this.input.data.map(o => o.name)
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartPlugins = [pluginDataLabels];
    this.barChartData = [
      { 
        data: this.input.data.map(o => o.value), 
        label: this.input.label
      }
    ];
  }
}
