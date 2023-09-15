import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
title:string='Employees List';
employees ? : any[];

constructor (private _employeesService: EmployeeService) {
  
}
ngOnInit(){
  console.log("Employee component Loaded!");
  this.employees=this._employeesService.getEmployees();
}
}
