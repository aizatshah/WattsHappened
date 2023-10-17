import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './wattshappened-charts-data';
import {HttpClient} from '@angular/common/http';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'wattshappened.component.html',
  styleUrls: ['wattshappened.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData, private http : HttpClient) {
  }

  months:any;
  data:any;
  chartBarData:any;
  firstMonth:any;
  lastMonth:any;

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
    this.http.get('https://wattshappened-54a6d-default-rtdb.asia-southeast1.firebasedatabase.app/.json')
    .subscribe(Response => {
 
      this.months = JSON.parse(JSON.stringify(Response)).map((data:any) => data.month);
      this.data = JSON.parse(JSON.stringify(Response)).map((data:any) => data.number);

      console.log(this.months)
      console.log(this.data)
      this.firstMonth = this.months[0];
      this.lastMonth = this.months[this.months.length-1];

      this.chartBarData = {
        labels: this.months,
        datasets: [
          {
            backgroundColor: '#1A76A9',
            data: this.data
          }
        ]
      };
    });
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
