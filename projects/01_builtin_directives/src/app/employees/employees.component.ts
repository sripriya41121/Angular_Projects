import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',

})
export class EmployeesComponent {
title: string = 'Employees List';
employees: any[]=[
  {
     empId:1,
     name: 'Raja',
     location: 'Milpitas',
  },
  {
    empId: 2,
    name: 'Priya',
    location: 'Dempsey Rd',

  },
  {
    empId: 3,
    name: 'Ayushi',
    location: 'Bilaspur',
  }
];

}
