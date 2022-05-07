import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ImageGraphComponent } from './image-graph.component';

@Component({
  selector: 'app-graph-screen',
  templateUrl: './graph-screen.component.html',
  styleUrls: ['./graph-screen.component.css']
})
export class GraphScreenComponent implements OnInit {
  expression: Boolean=true;
  columnDefs: ColDef[] = [
    
    { field: 'Item',sortable:true, filter:true ,width:140,cellRendererFramework:ImageGraphComponent},
    { field: 'Price' ,sortable:true,filter:true,width:140 },
    { field: 'Date',sortable:true,width:260}
];

rowData = [
    { Item: 'Apple', Price: 10, Date: new Date().toLocaleDateString() },
    { Item: 'Orange', Price: 20, Date: new Date().toLocaleDateString()  },
    { Item: 'lemon', Price: 30, Date: new Date().toLocaleDateString()  }
    
];
  constructor() { }

  ngOnInit(): void {
  }

  methodFromParent(rowIndex: any) {
    console.log(rowIndex);
    //this.openMydialogPopUp();
}

}
