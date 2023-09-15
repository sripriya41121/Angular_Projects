import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  
})
export class EmployeesComponent {
title: string="Employee List";

@Input()
companyName?: string;

}
