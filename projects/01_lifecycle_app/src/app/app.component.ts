import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular LifeCycle Demonstration';
  company: string='TCS';
  location: string='Milpitas';
  hasChild:boolean=true;

  toggleChild(){
    this.hasChild=!this.hasChild;
  }

}
