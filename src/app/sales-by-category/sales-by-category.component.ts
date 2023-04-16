import {Component, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.css']
})
export class SalesByCategoryComponent implements OnInit {

  chart=new Chart({
    chart:{
      type:'pie',
      height:200
    },
    title:{
      text:'Category wise sales' // Title of the chart
    },
    xAxis:{
      categories:[
        'Clothes',
        'Food',
        'Home Appliances',
        'Electronics',
        'Groceries'
      ] // X-axis categories for the chart
    },
    yAxis:{
      title:{
        text: 'Revenue (%)' // Y-axis title for the chart
      }
    },
    series:[
      {
        type:"pie",
        data:[
          {
            name:"Clothes", // Name of the data point
            y: 42, // Value of the data point
            color:"yellow", // Color of the data point
          },

          {
            name:"Food",
            y: 15,
            color:"green",
          },

          {
            name:"Home Appliances",
            y: 22,
            color:"purple",
          },

          {
            name:"Electronics",
            y: 13,
            color:"brown",
          },

          {
            name:"Groceries",
            y: 8,
            color:"blue",
          }
        ]
      },
    ],
    credits:{
      enabled:false // Disable credits in the chart
    }
  })
  ngOnInit(): void {
  }

}
