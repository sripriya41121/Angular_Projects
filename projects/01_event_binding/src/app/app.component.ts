import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Event Binding Demonstration';
  counter: number=0;
  inputData: string ="Javascript";


  incrementCounter(){
    this.counter=this.counter + 1;
    console.log("Counter = " + this.counter);
  }

  setInputData(value: any){
    this.inputData=value;
    console.log("Input Data = " +this.inputData);
  }
}
