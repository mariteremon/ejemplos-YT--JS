import { Component, OnInit } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { timer } from 'rxjs';


export interface PeriodicElement{
  id: number; 
  Nombre: string;
  Apellido: string; 
  FechaDeNacimiento: Date;
  position: number; 
}

interface Personas{
  Nombre: string,
  Apellido: string, 
  FechaDeNacimiento: Date; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, id: 12,  Nombre: 'Hydrogen', Apellido: 'Hydrogen', FechaDeNacimiento: new Date(1998, 11, 1)},
  {position: 2, id: 165, Nombre: 'Hydrogen', Apellido: 'Hydrogen', FechaDeNacimiento: new Date(1998, 11, 1)},
  {position: 3, id: 87,  Nombre: 'Hydrogen', Apellido: 'Hydrogen', FechaDeNacimiento: new Date(1998, 11, 1)}
  
 
];

@Component({
  selector: 'app-table-angular-p',
  standalone: true,
  imports: [TableAngularP],
  templateUrl: './table-angular-p.html',
  styleUrl: './table-angular-p.css',
})
export class TableAngularP implements OnInit {
  table: TableAngularP[] = []
  tableColumns : TableColumns<TableAngularP>[] =[]; 

  ngOnInit(): void {
    this.getTable(),
    this.setTableColumns();
  }

setTableColumns(){
  this.tableColumns= [
        {
        label: 'ID', 
        def: 'ID', 
        content: (row) => row.id,
        }, 
       {
        label: 'Nombre', 
        def: 'Nombre', 
        content: (row) => row.Nombre,
        }, 
           {
        label: 'Apellido', 
        def: 'Apellido', 
        content: (row) => row.Apellido,
        }, 
           {
        label: 'Fecha De Nacimiento', 
        def: 'Fecha De Nacimiento', 
        content: (row) => row.FechaDeNacimiento
        }, 
  ]
}


  getTable() {
      timer(2000).subscribe(() =>{
        this.table = [
        {
        id: 3939, 
        Nombre: 'Mari', 
        Apellido: 'Montiel', 
        FechaDeNacimiento: new Date
        }, 
        {
        id: 39399, 
        Nombre: 'Marii', 
        Apellido: 'Montield', 
        FechaDeNacimiento: new Date
        }, 
        {
        id: 39392, 
        Nombre: 'Marie', 
        Apellido: 'Montiels', 
        FechaDeNacimiento: new Date
        }
        ]
      
      })
  }
}
