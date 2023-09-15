import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Two Way Binding Demonstration';
  name: string='Sripriya';
  location: string='Hyderabad';

  setUpperCaseLocation(locationData:string){
    console.log(locationData);
    this.location=locationData.toUpperCase();
  }
}
