import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: ['li {color: red}']
})
export class EmployeesComponent {
title: string="Employees List";
}
