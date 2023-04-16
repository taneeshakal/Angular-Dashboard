import {Component, OnInit} from '@angular/core';
import {Chart} from "angular-highcharts";

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.css']
})
export class TopThreeProductsComponent implements OnInit {

  chart=new Chart({
    chart:{
      type:'bar',
      height:200
    },
    title:{
      text:'Top 3 Products'
    },
    xAxis:{
      categories:[
        'iPhone 14',
        'Kist Apple Juice',
        'Elephant House Sausages'
      ]
    },
    yAxis:{
      title:{
        text: ''
      }
    },
    series:[
      {
        type:"bar",
        showInLegend:false,
        data:[

          {
            name:"iPhone14",
            y:540,
            color:"purple",
          },

          {
            name:"Kist Apple Juice",
            y: 384,
            color:"brown",
          },

          {
            name:"Elephant House Sausages",
            y: 320,
            color:"blue",
          }
        ]
      },
    ],
    credits:{
      enabled:false
    }
  })
  ngOnInit(): void {
  }

}
