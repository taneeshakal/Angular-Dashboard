import {Component, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.css']
})
export class SalesByMonthComponent implements OnInit {

  // Chart configuration using angular-highcharts library
  chart=new Chart({
    chart:{
      type:'line',
      height:200
    },
    title:{
      text:'Sales for each month'
    },
    xAxis:{
      categories:[
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis:{
      title:{
        text: 'Revenue ($)'
      }
    },
    series:[
      {
        name:"Cambian",
        type:"line",
        color:"red",
        data:[48,96,54,78,90,65,74,59,75,80,95,100]
      },
      {
        name:"Arizona",
        type:"line",
        color:"blue",
        data:[20,58,41,36,96,74,15,18,64,35,89,47]
      },
    ],
    credits:{
      enabled:false
    }
  })

  ngOnInit(): void {
  }

}
