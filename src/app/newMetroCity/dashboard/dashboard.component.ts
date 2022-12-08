import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables} from 'node_modules/chart.js';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartConsumption;
  chartPurchase;
  constructor() { }

  ngOnInit(): void {
    this.RenderChart();
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Petrol' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Diesel' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }


  timeFrame(period){
      console.log(period);
      if(period === 'day'){
        this.chartConsumption.options.scales.x.time.unit = period;
        this.chartConsumption.data.datasets[0].data = 'day';
        this.chartConsumption.data.datasets[1].data = 'day';
      }

      if(period === 'month'){
        this.chartConsumption.options.scales.x.time.unit = period;
        this.chartConsumption.data.datasets[0].data = 'month';
        this.chartConsumption.data.datasets[1].data = 'month';
      }

      this.chartConsumption.update();
      }
  RenderChart(){

    const day = [
      {x: Date.parse('2022-12-1 00:00:00 GMT+0500'), y: 18},
      {x: Date.parse('2022-12-2 00:00:00 GMT+0500'), y: 14},
      {x: Date.parse('2022-12-3 00:00:00 GMT+0500'), y: 7},
    ];

    const month = [
      {x: Date.parse('2022-09-1 00:00:00 GMT+0500'), y: 23},
      {x: Date.parse('2022-10-1 00:00:00 GMT+0500'), y: 87},
      {x: Date.parse('2022-11-1 00:00:00 GMT+0500'), y: 45},
    ];

    let date = new Date();
     this.chartConsumption = new Chart("barchart_Consumption",{
      type: 'bar',
      data: {
        // labels: [date],
        datasets: [{
          label: 'petrol', 
          data: day,
          backgroundColor: [
            'rgba(233,136,136,1)',
          ],
          borderWidth: 1
        },
        {
          label: 'diesel',
          data: day,
          backgroundColor: [
            'rgba(127,137,231,1)', 
          ],
          borderWidth: 1
        }
      ]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
          }
        },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.chartPurchase = new Chart("barchart_Purchase", {
      type: 'bar',
      data: {
        labels: [date],
        // ['January',
        // 'February',
        // 'March',
        // 'April',
        // 'May',
        // 'June',
        // 'July',
        // 'August',
        // 'September',
        // 'October',
        // 'November',
        // 'December'],
        datasets: [{
          label: 'petrol',
          data: [65],
          backgroundColor: [
            'rgba(233,136,136,1)',
          ],
          borderWidth: 1
        },
        {
          label: 'diesel',
          data: [30],
          backgroundColor: [
            'rgba(127,137,231,1)', 
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
          }
        },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
