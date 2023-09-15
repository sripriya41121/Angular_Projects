import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnChanges, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  title: string='Employee List';
  @Input() companyName ? : string;
  @Input() LocationInfo ? : string;

  ngOnInit(){
    console.log("OnInit Of Employees Component");
    alert("I am Loaded!");
  }

  ngOnChanges(changes: {[propertyName: string] : SimpleChange }) {
    for(let propName in changes){
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue); 
      console.log(`OnChanges ==> ${propName}:currentValue= ${cur},previousValu=${prev}`);
    }
  }
}
