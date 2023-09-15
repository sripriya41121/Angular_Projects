import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
title: string='Employees List';
employees=[
  {
    id:1,
    name:'Raja',
    selected:false,
  },
  {
    id:2,
    name:'Priya',
    selected:false,
  },
  {
  id:1,
    name:'Sekhar',
    selected:false,
  }
];

@Output() itemClicked: EventEmitter<string> = new EventEmitter<string>();

onClick(item:any){
  for(let i=0; i<this.employees.length; i++)
  {
    this.employees[i].selected=false;
  }
    this.employees[item.id-1].selected=true;
    this.itemClicked.emit(item.name);
  
}
}
