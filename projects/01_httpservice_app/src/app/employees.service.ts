import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
private _employeesUrl = "http://localhost:3000/employees";
private count = 100;
private httpOptions = {
   headers: new HttpHeaders({
    'content-Type': 'application/json'
   })
};

  constructor(private _http: HttpClient) { }

  getEmployees(){
    return this._http.get(this._employeesUrl);
  }

  addEmployee(){
    this.count++;
    let newEmployee ={
      "id":this.count,
      "name":'Emp-'+this.count
    }
    return this._http.post(this._employeesUrl, newEmployee, this.httpOptions);
  }

 editEmployee(empid: any, empname: string){
    let editEmployeeUrl:  `${this._employeesUrl}/${empid}`;
    let updatedEmployee ={
      "name": empname +"_u"
    }
    return this._http.put(editEmployeeUrl, updatedEmployee, this.httpOptions);
 }


}
