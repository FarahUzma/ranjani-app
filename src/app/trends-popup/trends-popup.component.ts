import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import Chart from 'chart.js/auto';
export interface Data {
  month: String;
  price: Number;
}

@Component({
  selector: 'app-trends-popup',
  templateUrl: './trends-popup.component.html',
  styleUrls: ['./trends-popup.component.css']
})
export class TrendsPopupComponent implements OnInit {
  @ViewChild('chart')
  chartElementRef!: ElementRef;

  chart!: any

  title = 'app';
  url = 'http://localhost:4000/results';
  month :string[]=[];
  price :string[]=[];
  results= [
    {
        "month": "Jan",
        "price": "180"
    },
    {
      "month": "Feb",
      "price": "200"
    },
    {
      "month": "March",
      "price": "210"
    },
    {
      "month": "April",
      "price": "190"
    },
    {
      "month": "May",
      "price": "240"
    },
    {
      "month": "June",
      "price": "230"
    },
    {
      "month": "July",
      "price": "260"
    },
    {
      "month": "Aug",
      "price": "210"
    },
    {
      "month": "Sept",
      "price": "300"
    }];
  constructor(private  dialogRef:  MatDialogRef<TrendsPopupComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any,private elementRef: ElementRef) { }
  
     
  ngOnInit() {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#yourCavasId`);
    this.results.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              label:this.data.itemName,
              data: this.price,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          
          scales: {
            xAxes: {
              display: true
            },
            yAxes: {
              display: true
            },
          }
        }
      });
  }
  
  public  closeMe() {
    this.dialogRef.close();
}

}
