import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  styles: [
    ` .boldClass{
      font-weight:bold;
    }
    .italicsClass{
      font-style: italic;
    }

    .colorClass{
      color: red;
    }
    .selected{
      color: red;
    }
    `,
  ],
  template: `<ul>
    <li
    *ngFor="let fruit of fruits"
    (click)="onClick(fruit)"
    [class.selected]="fruit.selected"
    
    >
       {{ fruit.name }}

  
  </li>

  </ul>
  <button class="colorClass" [class]="classesToApply">My Button</button>
  <button class="colorClass" [class.boldClass]="applyBoldClass">
    My Button
</button>
<button class="colorClass" [class.boldClass]="!applyBoldClass">
  My Button
</button>

<button
class="colorClass boldClass italicsClass"
[class.boldClass]="!applyBoldClass"

>
  My button
</button>
<button class="colorClass" [ngClass]="addClasses()">My Button</button>
  `,
})


export class AppComponent {
  title: string = 'Class Binding Demonstration';
  classesToApply: string = 'italicsClass boldClass';
  applyBoldClass: boolean=true;
  applyItalicsClass: boolean=true;

  fruits=[
    {
      id:1,
      name:'Apple',
      selected:false,
    },
    {
      id:2,
      name:'Cranberry',
      selected:false,

    },
    {
      id: 3,
      name:'Raspberry',
      selected: false,
    }
  ];

  onClick(item:any){
    for(let i=0; i<this.fruits.length; i++){
      this.fruits[i].selected=false;
    }
    this.fruits[item.id-1].selected=true;
  }

  addClasses(){
    let classes={
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass,

    };

    return classes;
  }


}
