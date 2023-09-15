import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'  
})
export class EmployeesComponent {
title: string= 'Employees List';
nameFilter: string ='';
Toggle_btn: string="Toggle Above";
isDisabled:boolean=false;
employees:any[]=[
  {
    'empId': 1,
    'name':'Pedada',
    'location': 'Dempsey',
    'gender':'male',
  
  },
  {
    'empId': 2,
    'name':'Sripriya',
    'location': 'Milpitas',
    'gender':'Female',
  
  },
  {
    'empId': 3,
    'name':'Pawan',
    'location': 'Bilaspur',
    'gender':'male',
  
  },
];

fade_out(){
this.isDisabled=!this.isDisabled;
}
}
