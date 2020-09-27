import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public canvas : any;
  public ctx : any;
  public labels : any = ['','1 mar 2020', '2 mar 2020', '3 mar 2020', '3 mar 2020', '4 mar 2020', '5 mar 2020', '6 mar 2020', '7 mar 2020'];
  public dataCases : any = [0,4000, 6000, 8000, 6000, 4500, 6000,8000,9000,0,10000,12000];
  constructor() { }

  ngOnInit(): void {
    this.createLineChart(this.labels, this.dataCases, 'myChart');
  }
  private createLineChart(labels, dataCases, chartId) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type:"line",
      data:{
        labels:labels,
        datasets:[{
          label:'Chart 1',
          data:dataCases,
          backgroundColor:'#3347ff',
          borderColor:'#3347ff',
          fill:false,
          borderwidth:2
        }]
      },
      options:{
        
        tootltips:{
          mode:'index',
          intersect:true
        },
        hover:{
          mode:'nearest',
          intersect:true
        }
      }
    });
  }
}
