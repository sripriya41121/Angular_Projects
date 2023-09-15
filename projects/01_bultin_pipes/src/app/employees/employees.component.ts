import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent {
title: string="Employees List";
myDate: any=new Date("November 4, 2022 10:30:00");
employees:any[]=[
{
  'empId': 1,
  'name':'Raja',
  'location': 'Milpitas'

},
{
  'empId': 2,
  'name':'Sekhar',
  'location': 'Santa Clara'

},
{
  empId: 3,
  name:'Pedada',
  location: 'Dempsey'

}
];
}
