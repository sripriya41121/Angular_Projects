import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Styles and StyleURLs Demonstration';
  isBold: boolean=false;
  fontSize: number=30;
  isItalic: boolean=true;

  addStyles(){
    let styles={
      'font-weight':this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize,


    };
    return styles;
  }
}
