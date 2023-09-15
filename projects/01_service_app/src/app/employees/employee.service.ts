import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 getEmployees():any[]{
  return[
    {id:1,
    name:'Raja'
    },
    {id:2,
      name:'Sekhar'
      },
      {id:3,
        name:'Priya'
        }
  ];
 }
  //constructor() { }
}
