import { Component, OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.css']
})
export class TopThreeProductsComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'bar', // Set chart type to bar
      height: 200 // Set chart height to 200px
    },
    title: {
      text: 'Top 3 Products' // Set chart title
    },
    xAxis: {
      categories: [
        'iPhone 14', // Set x-axis categories for the chart
        'Kist Apple Juice',
        'Elephant House Sausages'
      ]
    },
    yAxis: {
      title: {
        text: '' // Set y-axis title to empty string
      }
    },
    series: [
      {
        type: "bar", // Set series type to bar
        showInLegend: false, // Hide legend for the series
        data: [
          {
            name: "iPhone14", // Set name for the first data point
            y: 540, // Set y-value for the first data point
            color: "purple", // Set color for the first data point
          },
          {
            name: "Kist Apple Juice", // Set name for the second data point
            y: 384, // Set y-value for the second data point
            color: "brown", // Set color for the second data point
          },
          {
            name: "Elephant House Sausages", // Set name for the third data point
            y: 320, // Set y-value for the third data point
            color: "blue", // Set color for the third data point
          }
        ]
      },
    ],
    credits: {
      enabled: false // Disable credits in the chart
    }
  });

  ngOnInit(): void {
  }

}
